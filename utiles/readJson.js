const fs = require('fs').promises;

const readJson = (path) => fs
  .readFile(path)
  .catch(() => {
    const errorMessage = { code: 500, message: `file ${path} not found` };
    throw errorMessage;
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      const errorMessage = { code: 500, message: 'JSON is invalid' };
      throw errorMessage;
    }
  });

module.exports = readJson;
