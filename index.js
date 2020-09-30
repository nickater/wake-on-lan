const express = require('express');
const exec = require('child_process').exec;
const app = express();

const port = 3001

app.get('/', (req, res) => {
  exec('wakeonlan 98:48:27:40:0A:71', (error, stdout) => {
    if(error instanceof Error) {
      res.send({
        output: stderr,
        msg: 'something went wrong'
      });
    } else {
      res.send({
        output: stdout,
        msg: req.headers.msg || 'launch successful'
      });
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
