const fs = require('fs')

fs.readFile('../input.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.log(err.message)
  }
  console.log(data)
})