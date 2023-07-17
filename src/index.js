'use strict';

const {readStdin} = require('./utils/io');
const {validatePluginRequest, validatePluginResponse} = require('./plugin-interface/validation');
const {errorResponse} = require('./plugin-interface/error');
const {handleInit} = require('./scaffold/init');
const {handleMetadata} = require('./scaffold/metadata');

async function main() {
  const input = await readStdin(process.stdin);

  const pluginRequest = validatePluginRequest(input);

  if (!pluginRequest) {
    process.stdout.write(errorResponse(`Cannot parse plugin request: ${input}`));
    return;
  }

  let pluginResponse;

  switch (pluginRequest.command) {
    case "init":
      pluginResponse = handleInit(pluginRequest);
      break;
    // case "create api":
    //   pluginResponse = handleApi(pluginRequest);
    //   break;
    // case "create webhook":
    //   pluginResponse = handleWebhook(pluginRequest);
    //   break;
    // case "flags":
    //   pluginResponse = handleFlags(pluginRequest);
    //   break;
    case "metadata":
      pluginResponse = handleMetadata(pluginRequest);
      break;
    default:
      pluginResponse = {
        Error: true,
        ErrorMsgs: [`unknown subcommand: ${pluginRequest.Command}`],
      };
  }

  if (!validatePluginResponse(pluginResponse)) {
    const respStr = JSON.stringify(pluginResponse, null, 2);
    process.stdout.write(errorResponse(`Invalid plugin response: ${respStr}`));
    return;
  }

  process.stdout.write(JSON.stringify(pluginResponse, null, 2));
}

main().catch(err => {
  console.error("Failed to run the plugin: ", err);
});

