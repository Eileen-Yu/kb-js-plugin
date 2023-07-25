'use strict';

const {parseArgs} = require('../utils/parse');

function handleWebhook({command, args, universe}) {
  // parse the flags
  const {group, version, kind} = parseArgs(args);

  if (!group || !version || !kind) {
    return {
      Error: true,
      ErrorMsgs: [`missing GVK ${args}`],
    };
  }

  const GVK = JSON.stringify({group, version, kind}, null, 2);

  universe["webhookFile"] = `This is the file generated by create webhook command, with GVK: ${GVK}`;
  return {
    apiVersion: "v1alpha1",
    command,
    universe
  }
}

module.exports = {handleWebhook}
