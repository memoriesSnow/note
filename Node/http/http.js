const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  console.log(req.url)
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end('响应数据')
})

server.listen(3001, () => {
  console.log('Server is running at 3001')
})
