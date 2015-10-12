var iterator = require('./');

var length = process.argv[2];
if (!length) {
  console.error('Usage: node example.js LENGTH');
  process.exit(1);
}
length = Number(length);

var it = iterator(length);
var n;

while (typeof (n = it()) != 'undefined') console.log(n);
