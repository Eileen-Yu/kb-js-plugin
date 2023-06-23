'use strict';

/*
export const errorResponse = (errorMsgs) => ({errorMsgs, error: true})

export const stringifyErr = (msg) => JSON.stringify(errorResponse(msg), null, 2);
*/

function errorResponse(errorMsgs) {
  const errRes = {
    errorMsgs,
    error: true
  }

  return JSON.stringify(errRes, null, 2)
}

module.exports = {errorResponse}
