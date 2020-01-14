const fs = require('fs');

const createFile = (path, content) => {
  if (!fs.existsSync(path)) {
    fs.writeFile(path, content, err => {
      if (err) {
        throw new Error(err);
      }
    });
  }
};

module.exports = createFile;
