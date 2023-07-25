'use strict';

function handleMetadata(pluginRequest) {
  // Initialize the PluginResponse structure
  let pluginResponse = {
    apiVersion: "v1alpha1",
    command: pluginRequest.command,
    universe: pluginRequest.universe,
  };

  if (pluginRequest.args[0] === "--init") {
    pluginResponse.metadata = {
      description: "The `init` subcommand of the sample js plugin is meant to initialize a project via Kubebuilder. It scaffolds a single file: `initFile`",
      examples: `Scaffold with the defaults:\n$ kubebuilder init --plugins=kb-js-plugin/v1\nScaffold with a specific domain:\n$ kubebuilder init --plugins=kb-js-plugin/v1 --domain my.domain`
    };
  } else if (pluginRequest.args[0] === "--api") {
    pluginResponse.Metadata = {
      description: "The `api` subcommand of the sample js plugin is meant to create an api for a project via Kubebuilder. It scaffolds a single file: `apiFile`",
      examples: `Scaffold with the GVK:\n$ kubebuilder create api --plugins=kb-js-plugin/v1 --group webapp --version v1 --kind Guestbook`
    };
  } else if (pluginRequest.args[0] === "--webhook") {
    pluginResponse.Metadata = {
      description: "The `webhook` subcommand  of the sample js plugin is meant to create a webhook for a project via Kubebuilder. It scaffolds a single file: `webhookFile`",
      examples: `Scaffold with the GVK:\n$ kubebuilder create webhook --plugins=kb-js-plugin/v1 --group webapp --version v1 --kind Guestbook`
    };
  } else {
    pluginResponse.error = true;
    pluginResponse.errorMsgs = [
      "unrecognized subcommand"
    ];
  }

  return pluginResponse;
}

module.exports = {handleMetadata}
