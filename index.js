const express = require('express');
const { spawn } = require('child_process')
const app = express();

const port = 3001

app.get('/wol', (req, res) => {
  spawn('wakeonlan 98:48:27:40:0A:71').stdout.on('data', (data) => {
    res.send({data});
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

