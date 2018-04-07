const express = require('express')
const app = express()
var lotto = Math.floor(Math.random() * 10)
console.log('lotto=', lotto)

app.get('/', (req, res) => res.send({status: true}))

app.get('/upload.php', (req, res) => {
  console.log('upload=', req.query)
  res.send('OK')
})

app.get('/lotto/:number', (req, res) => {
  let num = parseInt(req.params.number)
  if (!num) {
    res.send('X')
  } else if (num === lotto) {
    res.send('Y')
    lotto = Math.floor(Math.random() * 10)
    console.log('lotto=', lotto)
  } else {
    res.send('N')
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
