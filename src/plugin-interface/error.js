'use strict';

function errorResponse(msg) {
  const errorMsgs = ["", "[kb-js-plugin]>>>>>>", msg, "<<<<<<[kb-js-plugin]"];
  const errRes = {errorMsgs, error: true};
  return JSON.stringify(errRes, null, 2)
}

module.exports = {errorResponse}
