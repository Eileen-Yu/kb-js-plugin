'use strict';

function handleFlags(pluginRequest) {
  // Initialize the PluginResponse structure
  let pluginResponse = {
    apiVersion: "v1alpha1",
    command: pluginRequest.command,
    universe: pluginRequest.universe,
    flags: []
  };

  if (pluginRequest.args[0] === "--init") {
    pluginResponse.flags.push({
      Name: "number",
      Type: "int",
      Default: "1",
      Usage: "sets a number to be added in the scaffolded initFile"
    })
  } else {
    pluginResponse.error = true;
    pluginResponse.errorMsgs = ["unrecognized flag"];
  }

  return pluginResponse;
}

module.exports = {handleFlags}
