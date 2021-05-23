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
- name: 'ubuntu'
  entrypoint: bash
  dir: bin
  args:
  - -c
  - |
    apt-get update -y
    apt-get install -y sudo curl
    curl -L https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl > kubectl
    chmod 0750 kubectl
    curl -L  https://storage.googleapis.com/minikube-builds/master/minikube-linux-amd64 > minikube
    chmod 0750 minikube
- name: 'ubuntu'
  entrypoint: bash
  args:
  - -xeuc
  - |
    PATH="$${PATH}:$${PWD}/bin"
    {
      apt-get update -y
      apt-get install -y sudo curl gnupg
      sh -c "echo 'deb https://download.docker.com/linux/ubuntu focal stable' > /etc/apt/sources.list.d/docker.list"
      curl -L https://download.docker.com/linux/ubuntu/gpg -o docker.key && apt-key add - < docker.key 
      apt-get update -y
      apt-get install -y docker-ce docker-ce-cli containerd.io
      apt-get install -y conntrack sudo iptables
      docker version
    } >/dev/null
    minikube start --driver=none --alsologtostderr --force 
    kubectl get pods -A
options:
  machineType: N1_HIGHCPU_8
```