const express = require('express');
const exec = require('child_process').exec;
const app = express();

const port = 3001

app.get('/wol', (req, res) => {
  exec('wakeonlan 98:48:27:40:0A:71', (error, stdout, stderr) => {
    if (error instanceof Error) {
      console.error(error);
      throw error;
    }

    console.log({stdout});
    console.log({stderr});
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

