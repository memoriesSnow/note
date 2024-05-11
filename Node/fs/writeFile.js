const fs = require('fs')

fs.writeFile('../input.txt', 'writeFile148947', err => {
  if (err) {
    return console.log(err)
  }
  console.log('写入成功!')
})