const express = require('express');
const exec = require('child_process').exec;
const app = express();

const port = 3001
const NICK_MAC = '98:48:27:40:0A:71'
const STACEY_MAC = 'D8:07:B6:54:DF:32'

app.get('/', (req, res) => {
  fireUpBoth(res);
})

app.get('/pauerhaus', (req, res) => {
  res.send('FIRED UP NICKS HOG MFER!')
})

app.get('/rss-rig', (req, res) => {
  res.send('FIRED UP STACEYS RIG!! FUCK YEAH')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function fireUpNicksRig(res) {
  exec('wakeonlan 98:48:27:40:0A:71', (error, stdout) => {
    if(error instanceof Error) {
      res.send({
        output: stdout,
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

function fireUpStaceysRig(res) {
  exec('wakeonlan D8:07:B6:54:DF:32', (error, stdout) => {
    if(error instanceof Error) {
      res.send({
        output: stdout,
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

function fireUpBoth(res) {
 return exec(`wakeonlan ${NICK_MAC} ; wakeonlan ${STACEY_MAC}` , (error, stdout) => {
    if(error instanceof Error) {
      res.send({
        output: error,
        msg: 'something went wrong'
      });
    } else {
     res.send({
        output: {},
        msg: req.headers.msg || 'launch is successful'
      });
    }
  })
}


