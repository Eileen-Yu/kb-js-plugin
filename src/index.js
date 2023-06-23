'use strict';

const {readStdin} = require('./utils/io');
const {validatePluginRequest, validatePluginResponse} = require('./plugin-interface/validation');
const {errorResponse} = require('./plugin-interface/error');
const {handleInit} = require('./scaffold/init');

async function main() {
  const input = await readStdin(process.stdin);

  const pluginRequest = validatePluginRequest(input);

  if (!pluginRequest) {
    process.stdout.write(pluginErr.errorResponse(`Cannot parse plugin request: ${input}`));
    return;
  }

  if (pluginRequest.command != "init") {
    process.stdout.write(errorResponse(`kb-js-plugin only support "init" command`));
    return;
  }

  const pluginResponse = handleInit(pluginRequest);

  if (!validatePluginResponse(pluginResponse)) {
    process.stdout.write(errorResponse(`Invalid plugin response`));
    return;
  }

  process.stdout.write(JSON.stringify(pluginResponse, null, 2));
}

main().catch(err => {
  console.error("Failed to run the plugin: ", err);
});

