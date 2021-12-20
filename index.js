import express from 'express';
import wakeonlan from 'wakeonlan'

const app = express();

const port = 3002;
const NICK_MAC = '98:48:27:40:0A:71';
const STACEY_MAC = 'D8:07:B6:54:DF:32';

app.get('/pauerhaus', async (req, res) => {
  const result = await wakeonlan(NICK_MAC);
  res.send({ msg: 'OK' })
})

app.get('/rss-rig', async (req, res) => {
  const result = await wakeonlan(STACEY_MAC);
  res.send({ msg: 'OK' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

