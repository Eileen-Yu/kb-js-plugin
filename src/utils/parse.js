'use strict';

// parse the incoming args and convert them to map, such as:
// flag1: value1
// flag2: value2, value3
// flag3: value not provided
function parseArgs(args) {
  // Check if args is not null and is an array
  if (!Array.isArray(args)) {
    return null;
  }

  let parsedArgs = {};
  let currentFlag;

  args.forEach(arg => {
    // If the argument starts with '--', it's a new flag
    if (arg.startsWith("--")) {
      // in case "--flag=value"
      if (arg.includes('=')) {
        const [flag, value] = arg.replace("--", "").split('=');
        parsedArgs[flag] = value;
        currentFlag = null;
      } else {
        currentFlag = arg.replace("--", "");
        // set the default value as an empty array to accumulate multiple values
        parsedArgs[currentFlag] = [];
      }
    }
    // Otherwise, it's a value associated with the most recent flag
    else if (currentFlag) {
      parsedArgs[currentFlag].push(arg);
    }
  });

  // Convert arrays with single elements to plain values
  Object.keys(parsedArgs).forEach(key => {
    if (Array.isArray(parsedArgs[key]) && parsedArgs[key].length === 1) {
      parsedArgs[key] = parsedArgs[key][0];
    }
    else {
      parsedArgs[key] = parsedArgs[key].join(' ');
    }
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

