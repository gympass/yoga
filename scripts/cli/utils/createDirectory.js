const fs = require('fs');

const createDirectory = paths =>
  paths.forEach(path => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true }, err => {
        if (err) {
          throw new Error(err);
        }
      });
    }
  });

module.exports = createDirectory;
