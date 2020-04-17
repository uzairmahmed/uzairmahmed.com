Website
|---- app.yaml
|---- www/
|----|---- index.html
|----|---- other_files

Backend
|---- app.yaml
|---- google_creds.json     (not online, make your own credentials if lost)
|---- instance_vals.json    (not online, make your own credentials if lost)
|---- passes.json    (not online, make your own credentials if lost)
|---- main.py
|---- requirements.txt

To Deploy Front-End Service:
    `gcloud auth login`
    `gcloud config set project [project-name]`
    `cd path/to/Website/app.yaml`
    `gcloud app deploy`

To Deploy Backend Service:
    `gcloud auth login`
    `gcloud config set project [project-name]`
    `cd path/to/Backend/app.yaml`
    `gcloud app deploy`