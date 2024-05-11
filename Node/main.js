// 阻塞代码实例
// var fs = require('fs')
// var data = fs.readFileSync('input.txt')
// console.log(data.toString())
// console.log('the program is end');


// 非阻塞代码实例
var fs = require('fs')
fs.readFile('input.txt', function (err, data) {
  if (err) {
    console.error(err)
    return
  }
  console.log(data.toString())
})
console.log('the program is end');
