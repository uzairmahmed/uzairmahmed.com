from flask import Flask, request
from flask_cors import CORS
import googleapiclient.discovery, os, time, json

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

mc_server_pass = passwords["mc_server_pass"]

# Global Status Variables
mc_server_status = 0

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
