const express = require('express');
const exec = require('child_process').exec;
const app = express();

const port = 3001

app.get('/', (req, res) => {
  exec('wakeonlan 98:48:27:40:0A:71', (error, stdout, stderr) => {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    } else {
      res.send({
        output: stdout,
        msg: 'you got it, dude!'
      });
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

