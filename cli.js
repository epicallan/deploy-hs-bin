const spawn = require('child_process').spawn;

const input = process.argv.slice(2);
const bin = require('./');

if (bin !== null) {
  spawn(bin, input, {stdio: 'inherit'})
    .on('exit', process.exit);
} else {
  throw new Error('Platform not supported.');
}