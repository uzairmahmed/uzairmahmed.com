import googleapiclient.discovery, os, time, json, smtplib
from flask import Flask, request
from flask_cors import CORS
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Initializes Flask App
app = Flask(__name__)
CORS(app)

# Loads Google Cloud Credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "google_creds.json"

# Loads Google Cloud Instance Data
with open('instance_vals.json', 'r') as f:
    variables_json = json.load(f)

project_id = variables_json["project_id"]
zone_name = variables_json["zone_name"]
mc_instance_name = variables_json["mc_instance_name"]

# Loads Backend Passwords
with open('passes.json', 'r') as f:
    passwords = json.load(f)

my_email = passwords["email"]
sender_address = passwords["emailer_send_address"]
sender_pass = passwords["emailer_send_password"]
mc_server_pass = passwords["mc_server_pass"]

# Global Status Variables
mc_server_status = 0

def send_email(subject, message, address):
    msg = MIMEMultipart()
    msg['From'] = sender_address
    msg['To'] = address

    msg['Subject'] = subject
    msg.attach(MIMEText(message, 'plain'))

    session = smtplib.SMTP('smtp.gmail.com', 587) #use gmail with port
    session.starttls() #enable security
    session.login(sender_address, sender_pass) #login with mail_id and password
    text = msg.as_string()
    session.sendmail(sender_address, address, text)
    session.quit()
    print('Mail Sent')

def email_contact(name, address, phone, subject, message):
    subject1 = "New Message From: {}".format(name)
    subject2 = "Your Message to Uzair Ahmed at uzairmahmed.com"
    textStart1 = "Uzair, you have recieved a new mail from {}:\n\n".format(name)
    textStart2 = "Hello {},  Here is a copy of your response:\n\n".format(name)
    messageText = "    --- Contact Information ---\n\
Name: {}\n\
Email:{}\n\
Phone:{}\n\
\n\n    --------- Message ---------\n\
{}".format(name, address, phone, message)


    email1 = textStart1+messageText
    email2 = textStart2+messageText

    send_email(subject1, email1, my_email)
    print ("Sent Email to Uzair")
    if email2 != "":
        send_email(subject2, email2, address)
        print ("Sent Email to Contacter")


# Starts a VM Instance on GCP
def start_instance(compute, project, zone, name):
    return compute.instances().start(
        project=project,
        zone=zone,
        instance=name).execute()

# Stops a VM Instance on GCP
def stop_instance(compute, project, zone, name):
    return compute.instances().stop(
        project=project,
        zone=zone,
        instance=name).execute()

# Waits for a GCP VM operation to complete.
def wait_for_operation(compute, project, zone, operation):
    print('Waiting for operation to finish...')
    while True:
        result = compute.zoneOperations().get(
            project=project,
            zone=zone,
            operation=operation).execute()

        if result['status'] == 'DONE':
            print("done.")
            if 'error' in result:
                raise Exception(result['error'])
            return result

        time.sleep(1)

# Gets instance status.
def get_status(compute, project, zone, name):
    result = compute.instances().get(project=project, zone=zone, instance=name).execute()
    return result['status']

@app.route('/')
def hello():
    return '<h1>Uh, hello?</h1><p>If you somehow landed here, please go to <a href="https://www.uzairmahmed.com">https://www.uzairmahmed.com</a></p>'

@app.route('/contact-email', methods=['POST'])
def emailer():
    requestJson = request.get_json(force=True)
    name = requestJson['name']
    address = requestJson['email']
    phone = requestJson['phone']
    subject = requestJson['subject']
    message = requestJson['message']

    email_contact(name, address, phone, subject, message)
    print(name)
    return 'done'

@app.route('/mc-password-check', methods=['POST'])
def passCheck():
    requestJson = request.get_json(force=True)
    input = requestJson['input']

    if input == mc_server_pass:
        print ("VALID PASSWORD")
        return "VALID"
    else:
        print ("INVALID PASSWORD")
        return "INVALID"

@app.route('/start-mc', methods=['GET'])
def start_mc_server():
    print("Starting Minecraft Server")

    compute = googleapiclient.discovery.build('compute', 'v1')
    operation = start_instance(compute, project_id, zone_name, mc_instance_name)
    wait_for_operation(compute, project_id, zone_name, operation['name'])
    
    return 'done'

@app.route('/stop-mc', methods=['GET'])
def stop_mc_server():
    print("Stopping Minecraft Server")

    compute = googleapiclient.discovery.build('compute', 'v1')
    operation = stop_instance(compute, project_id, zone_name, mc_instance_name)
    wait_for_operation(compute, project_id, zone_name, operation['name'])
    
    return 'done'

@app.route('/mc-status', methods=['GET'])
def get_mc_vm_status():
    compute = googleapiclient.discovery.build('compute', 'v1')
    status = get_status(compute, project_id, zone_name, mc_instance_name)
    return status

if __name__ == '__main__':
    mc_server_status = get_mc_vm_status()
    app.run()
