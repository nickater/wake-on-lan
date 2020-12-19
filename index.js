const express = require('express');
const exec = require('child_process').exec;
const app = express();

const port = 3001;
const NICK_MAC = '98:48:27:40:0A:71';
const STACEY_MAC = 'D8:07:B6:54:DF:32';

app.get('/pauerhaus', (req, res) => {
  exec(`wakeonlan ${NICK_MAC}`, (stderr, stdout) => {
    res.send({msg:'FIRED UP NICKS HOG!'})
  });

})

app.get('/rss-rig', (req, res) => {
  exec(`wakeonlan ${STACEY_MAC}`, (stderr, stdout) => {
    res.send({msg: 'FIRED UP STACEYS RIG!'})
  });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

