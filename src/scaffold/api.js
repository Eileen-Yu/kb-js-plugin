'use strict';

const {parseArgs} = require('../utils/parse');

function handleApi({command, args, universe}) {
  // parse the flags
  const {group, version, kind} = parseArgs(args);

  if (!group || !version || !kind) {
    return {
      Error: true,
      ErrorMsgs: [`missing GVK ${args}`],
    };
  }

  const GVK = JSON.stringify({group, version, kind}, null, 2);

  universe["apiFile"] = `This is the file generated by create api command, with GVK: ${GVK}`;

  return {
    apiVersion: "v1alpha1",
    command,
    universe
  }
}

module.exports = {handleApi}

// TODO: update PROJECT?
/*
const yaml = require('yaml')

const projectInfo = yaml.parse('PROJECT')

const resources = projectInfo.resources || [];

resources.push(
  {
    api: {
      crdVersion: "v1",
      namespaced: true,
    },
    controller: true,
    group,
    kind,
    version
  }
)

const newProjectInfo = yaml.stringify({...projectInfo, resources})
fs.writeFileSync('PROJECT', newProjectInfo)
*/
