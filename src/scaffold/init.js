'use strict';

function handleInit({apiVersion, command}) {
  return {
    apiVersion,
    command,
    metadata: {
      Description: "This is the description",
      Examples: "This is the examples"
    },
    universe: {
      "file1": "This is file1",
      "file2": "This is file2"
    }
  }
}


module.exports = {handleInit}
