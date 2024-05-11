var http = require('http')
var fs = require('fs')
var url = require('url')

let server = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname
  console.log(pathname)

  console.log("Request for" + pathname + "received")

  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      // HTTP 状态码: 404 : NOT FOUND
      // Content Type: text/html
      res.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      // HTTP 状态码: 200 : OK
      // Content Type: text/html
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });

      // 响应文件内容
      res.write(data.toString());
    }
    //  发送响应数据
    res.end();
  })
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');