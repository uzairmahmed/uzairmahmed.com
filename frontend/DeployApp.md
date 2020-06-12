Website

|---- app.yaml
|---- www/
|----|---- index.html
|----|---- other_files

To Deploy Front-End Service:
`npm run build`
`gcloud auth login`
`gcloud config set project [project-name]`
`cd path/to/Website/app.yaml`
`gcloud app deploy`