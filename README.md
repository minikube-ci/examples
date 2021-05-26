# Examples

This repository provides samples and testing for running [kubernetes/minikube](https://github.com/kubernetes/minikube) on various CI platforms.

## Supported / Tested CI Platforms


For any platform not yet listed or listed as "Unsure :question:" we are looking for your help!
Please file Pull Requests and / or Issues for missing CI platforms :smile:

| Platform | Known to Work? | Status |
|---|---|--|
| [Prow](https://github.com/kubernetes/test-infra/tree/master/prow) | [Yes](https://github.com/kubernetes/test-infra/tree/master/config/jobs/kubernetes/minikube) :heavy_check_mark: | [![Prow](https://prow.k8s.io/badge.svg?jobs=pull-minikube-build)](https://prow.k8s.io/?job=pull-minikube-build) |
| [Google Cloud Build](https://cloud.google.com/cloud-build/) | [Yes](./gcb.md) :heavy_check_mark: | [![cloud build status](https://storage.googleapis.com/minikube-ci-example/build/working.svg)](https://pantheon.corp.google.com/cloud-build/dashboard?project=k8s-minikube) |
| [Github](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/about-continuous-integration) | [Yes](.github/workflows/minikube.yml) :heavy_check_mark: | [![Github](https://github.com/minikube-ci/examples/workflows/Minikube/badge.svg)](https://github.com/minikube-ci/examples/actions) |
| [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) | [Yes](azure-pipelines.yml) :heavy_check_mark: | ![Azure Pipelines](https://dev.azure.com/medyagh0825/minikube-ci/_apis/build/status/examples?api-version=5.1-preview.1) 