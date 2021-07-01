#!/bin/bash

# standard bash error handling
set -o errexit;
set -o pipefail;
set -o nounset;
# debug commands
set -x;

# working dir to install binaries etc, cleaned up on exit
BIN_DIR="$(mktemp -d)"
# minikube binary will be here
MINIKUBE="${BIN_DIR}/minikube"

# cleanup on exit (useful for running locally)
cleanup() {
    "${MINIKUBE}" delete --all || true
    rm -rf "${BIN_DIR}"
}
trap cleanup EXIT

# util to install a released minikube version into ${BIN_DIR}
install_minikube_release() {
    MINIKUBE_BINARY_URL="https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64"
    wget -O "${MINIKUBE}" "${MINIKUBE_BINARY_URL}"
    chmod +x "${MINIKUBE}"
}

main() {
    # get minikube
    install_minikube_release
    # create a cluster
    "${MINIKUBE}" start --force
    "${MINIKUBE}" kubectl -- get pods -A
    # TODO: invoke your tests here
    # teardown will happen automatically on exit
}

main