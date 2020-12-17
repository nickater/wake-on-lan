const express = require('express');
const exec = require('child_process').exec;
const app = express();

const port = 3001

app.get('/', (req, res) => {
  fireUpNicksRig();
  fireUpStaceysRig();
})

app.get('/pauerhaus', (req, res) => {
  fireUpNicksRig();
})

app.get('/rss-rig', (req, res) => {
  fireUpStaceysRig();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function fireUpNicksRig() {
  exec('wakeonlan 98:48:27:40:0A:71', (error, stdout) => {
    if(error instanceof Error) {
      res.send({
        output: stderr,
        msg: 'something went wrong'
      });
    } else {
      res.send({
        output: stdout,
        msg: req.headers.msg || 'launch is successful'
      });
    }
  })
}

function fireUpStaceysRig() {
  exec('wakeonlan D8:07:B6:54:DF:32', (error, stdout) => {
    if(error instanceof Error) {
      res.send({
        output: stderr,
        msg: 'something went wrong'
      });
    } else {
      res.send({
        output: stdout,
        msg: req.headers.msg || 'launch is successful'
      });
    }
  })
}
