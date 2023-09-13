const fs = require('fs');

function writeToFile(filename, data){
  fs.writeFile(filename,data,(err) =>
  err
      ? console.error(err)
      : console.log(`Document ${filename} saved.`)
);
}

module.exports = writeToFile;