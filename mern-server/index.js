const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.get('/', (req, res) => {
  res.send('Hello Nisal!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})