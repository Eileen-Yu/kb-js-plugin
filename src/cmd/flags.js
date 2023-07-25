'use strict';

const minimist = require('minimist');

function handleFlags({command, args, universe}) {
  // Initialize the PluginResponse structure
  let pluginResponse = {
    apiVersion: "v1alpha1",
    command,
    universe,
    flags: []
  };

  const parsedSubcommands = minimist(args);

  if (parsedSubcommands.init) {
    pluginResponse.flags.push({
      Name: "domain",
      Type: "string",
      Default: "example.domain.com",
      Usage: "sets the domain added in the scaffolded initFile"
    })
  } else {
    pluginResponse.error = true;
    pluginResponse.errorMsgs = ["unrecognized flag"];
  }

  return pluginResponse;
}

module.exports = {handleFlags}
