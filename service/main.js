const fs = require('fs')

const path = require('path')

const express = require('express')

const app = express()

fs.readdir(path.join(__dirname, '/src'), (err, files) => {
  if (err) {
    return console.log(err.message);
  }
  if (files.length) {
    console.log(files);
    showFileList(files)
  }
})

app.use(express.static('./src'))

app.listen(8080, function () {
  console.log('server is running at 8080');
})

function showFileList (files) {
  let dom = ''
  files.forEach(item => {
    dom += `<a href="${item}">${item}</a><br/>\n`
  })
  fs.writeFile('./index.html', dom, () => {
    console.log('write content success!');
  })
  app.get('/', (req, res) => {
    res.send(dom)
  })
}