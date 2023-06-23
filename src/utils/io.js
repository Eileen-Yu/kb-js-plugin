'use strict';

async function readStdin(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

module.exports = {
  readStdin
};
