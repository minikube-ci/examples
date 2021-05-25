/**
 * gcloud functions deploy <FUNC_NAME> --runtime nodejs10 --trigger-resource cloud-builds --trigger-event google.pubsub.topic.publish
 * @param {object} pubsubMessage The Cloud Functions event.
 */
const { Storage } = require('@google-cloud/storage');

exports.working = (pubsubMessage) => {
  if (pubsubMessage.data) {
    buildResource = JSON.parse(Buffer.from(pubsubMessage.data, 'base64').toString())
    console.log(buildResource.substitutions.BRANCH_NAME);
    console.log(buildResource.substitutions.TRIGGER_NAME);
    console.log(buildResource.status);
    if (buildResource.source) {
      if (buildResource.substitutions.BRANCH_NAME && buildResource.substitutions.TRIGGER_NAME) {
        repo = buildResource.substitutions.TRIGGER_NAME === "minikube-ci-example";
        branch = buildResource.substitutions.BRANCH_NAME === "master";
      }
    }
    if (buildResource.status) {
      status = buildResource.status;
    }
    const storage = new Storage();
    if (repo && branch && status == "SUCCESS") {
      storage.bucket("minikube-ci-example")
        .file("build/success.svg")
        .copy(storage.bucket("minikube-ci-example")
          .file("build/working.svg"));
      console.log("switched badge to build success")
    }
    if (repo && branch && status == "FAILURE") {
      storage.bucket("minikube-ci-example")
        .file("build/failure.svg")
        .copy(storage.bucket("minikube-ci-example")
          .file("build/working.svg"));
      console.log("switched badge to build failure")
    }
  }
};



