'use strict';

const minimist = require('minimist');

function handleMetadata({command, args, universe}) {
  // Initialize the PluginResponse structure
  let pluginResponse = {
    apiVersion: "v1alpha1",
    command,
    universe,
  };

  const parsedSubcommands = minimist(args);

  if (parsedSubcommands.init) {
    pluginResponse.metadata = {
      description: "The `init` subcommand of the sample js plugin is meant to initialize a project via Kubebuilder. It scaffolds a single file: `initFile`",
      examples: `Scaffold with the defaults:\n$ kubebuilder init --plugins=kb-js-plugin/v1`
    };
  } else if (args.includes('api')) {
    pluginResponse.Metadata = {
      description: "The `api` subcommand...",
      examples: `Example for api subcommand...`
    };
  } else if (args.includes('webhook')) {
    pluginResponse.Metadata = {
      description: "The `webhook` subcommand...",
      examples: `Example for webhook subcommand...`
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
