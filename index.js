const VERSION = require('./package.json').version;

const path = require('path');

module.exports =
  process.platform === 'darwin' ||  process.platform === 'linux' 
    ? path.join(__dirname, 'deploy-init' + VERSION') :
null;
