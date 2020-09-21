const express = require('express');
const wol = require('wake_on_lan');
const app = express();

const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!');
  wol.wake('98:48:27:40:0A:71');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

