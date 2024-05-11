const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(req);
})

app.get('/user', (req, res) => {
  res.send({ name: 'dd', age: 25, gender: 'nan' })
})
app.post('/user', (req, res) => {
  res.send('请求成功')
})
app.listen(8080, () => {
  console.log('Server is running at 8080');
})