
FROM gcr.io/k8s-minikube/prow-test:v0.0.1
RUN apt-get update && apt-get install -y curl linux-image-$(uname -r)
RUN curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && \
    install minikube-linux-amd64 /usr/local/bin/minikube