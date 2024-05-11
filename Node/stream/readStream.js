const fs = require('fs')
var data = '';

var readStream = fs.createReadStream('./input.txt')

readStream.setEncoding('UTF8')

readStream.on('data', function (chunk) {
  console.log(chunk)
  data += chunk
})

readStream.on('end', function () {
  console.log('end:' + data);
});

readStream.on('error', function (err) {
  console.log('error!');
  console.log(err.stack);
});

readStream.on('finish', function () {
  console.log('finish');
});