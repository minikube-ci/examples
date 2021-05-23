# Examples

This repository provides samples and testing for running [kubernetes/minikube](https://github.com/kubernetes/minikube) on various CI platforms.

## Supported / Tested CI Platforms


For any platform not yet listed or listed as "Unsure :question:" we are looking for your help!
Please file Pull Requests and / or Issues for missing CI platforms :smile:

| Platform | Known to Work? | Status |
|---|---|--|
| [Prow](https://github.com/kubernetes/test-infra/tree/master/prow) | [Yes](https://github.com/kubernetes/test-infra/tree/master/config/jobs/kubernetes/minikube) :heavy_check_mark: | [![Prow](https://prow.k8s.io/badge.svg?jobs=pull-minikube-build)](https://prow.k8s.io/?job=pull-minikube-build) |
| [Google Cloud Build](https://cloud.google.com/cloud-build/) | [Yes](./gcb.md) :heavy_check_mark: | None |
| [Github](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/about-continuous-integration) | [Yes](./ga.md) :heavy_check_mark: | None |