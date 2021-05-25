# `minikube` on Google Cloud Build

This is to run minikube on Google Cloud Build. Basically starting from Ubuntu image, 
We first install minikube, then install docker, In the end, start minikube with none driver.

## Example `cloudbuild.yml`

The following cloud build config can be used by running

```sh
gcloud builds submit --config cloudbuild.yml --no-source
```

and will:

- download current version of `kubectl`
- download linux amd64 binary of `minikube`
- download and install docker
- run `minikube` to create a cluster

Examples can be found in the following `cloudbuild.yml`.

```yaml
steps:
- name: 'gcr.io/cloud-builders/docker'
  entrypoint: 'bash'
  args:
    - -c
    - |
      docker build -t minikube-kic .
- name: gcr.io/cloud-builders/docker
  entrypoint: 'bash'
  args:
    - -c
    - |
       docker run -d -t --privileged --name minikube minikube-kic:latest
- name: gcr.io/cloud-builders/docker
  entrypoint: 'bash'
  args:
    - -c
    - |
       docker exec minikube /bin/bash -c "minikube start --force && kubectl get pods -A"
options:
  machineType: N1_HIGHCPU_8
```