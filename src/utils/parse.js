'use strict';

// parse the incoming args and convert them to map, such as:
// flag1: value1
// flag2: value2, value3
// flag3: value not provided
function parseArgs(args) {
  let parsedArgs = {};
  let currentFlag;

  args.forEach(arg => {
    // If the argument starts with '--', it's a new flag
    if (arg.startsWith("--")) {
      currentFlag = arg.replace("--", "");
      parsedArgs[currentFlag] = [];
    }
    // Otherwise, it's a value associated with the most recent flag
    else if (currentFlag) {
      parsedArgs[currentFlag].push(arg);
    }
  });

  // Join multiple values with a space
  Object.keys(parsedArgs).forEach(key => {
    parsedArgs[key] = parsedArgs[key].join(" ");
  });

  return parsedArgs;
}

// print the parsed flags
function formatFlags(flags) {
  return Object.entries(flags).map(([flag, value]) => `${flag}: ${value.length > 0 ? value : 'true'}`).join(', ');
}

module.exports = {
  parseArgs,
  formatFlags
};

