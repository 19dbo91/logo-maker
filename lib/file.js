const fs = require('fs');
const path2Saved = '../output.svg';

fs.readFile( path2Saved, 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);