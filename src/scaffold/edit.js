'use strict';

function handleEdit({command, args, universe}) {
  // Check if 'apiFile' exists in universe
  if (universe.hasOwnProperty('apiFile')) {
    universe["apiFile"] = `This file has been updated by edit command.`;
  }

  return {
    apiVersion: "v1alpha1",
    command,
    universe
  }
}

module.exports = {handleEdit}
