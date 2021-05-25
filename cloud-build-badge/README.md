# cloud-build-badge

Add cloud build badges in 2 minutes.

1) Create a cloud storage bucket ([tutorial here](https://cloud.google.com/storage/docs/creating-buckets)).
2) Create a folder in the bucket named `build`.
3) Download [failure](https://storage.googleapis.com/tensortask-static/build/failure.svg) and [success](https://storage.googleapis.com/tensortask-static/build/success.svg) badges (follow links and save).
4) Upload both badges to the google storage bucket/folder created in the previous step (e.g. `minikube-ci-example/build/success.svg`).
5) Create a placeholder for your badge (e.g. `minikube-ci-example/build/working.svg` (make permissions public).
6) Deploy the cloud function as the badge name and set the function trigger to the cloud-builds pubsub topic.

`gcloud functions deploy working --runtime nodejs10 --trigger-resource cloud-builds --trigger-event google.pubsub.topic.publish`

7) Add badge to README.md
```
# README.md
[![cloud build status](https://storage.googleapis.com/minikube-ci-example/build/working.svg)](https://pantheon.corp.google.com/cloud-build/dashboard?project=k8s-minikube)
```
8) For more detail, please check [cloud-build-badge](https://github.com/samsends/cloud-build-badge)