'use strict';

/*
 * TODO: validate input json schema
 * Ref: https://github.com/tdegrunt/jsonschema
 * { 
 *   "apiVersion": "...",
 *   "args": [
 *     "--flag1": "val1",
 *     "--flag2": "val2"
 *   ],
 *   "command": "create-api",
 *   "universe": {
 *     "foo": "bar",
 *     "key": "value"
 *   }
 * }
*/
function validatePluginRequest(rawStr) {
  const data = JSON.parse(rawStr)
  if (!data.apiVersion || !data.command) return false

  return data
}

function validatePluginResponse(pluginResponse) {
  return pluginResponse.apiVersion && pluginResponse.command && pluginResponse.metadata && pluginResponse.universe
}

module.exports = {validatePluginRequest, validatePluginResponse}
