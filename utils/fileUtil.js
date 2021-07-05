const fs = require('fs')
  
function isFileExistInTestFiles(name) {
    return isFileExistByPath('TestingFiles', name);
}

function isFileExistByPath(path, name)
{
  return fs.existsSync(`${path}/${name}`);
}

module.exports = { isFileExistInTestFiles, isFileExistByPath };

