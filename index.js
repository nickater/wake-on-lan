const express = require('express');
const exec = require('child_process').exec;
const app = express();

const port = 3001

app.get('/', (req, res) => {
  const fireUpStacey = wakeOnLan('D8:07:B6:54:DF:32');
  // const fireUpNick = wakeOnLan('98:48:27:40:0A:71');
  res.send({
    pauerhaus: 'TEST',
    rssrig: fireUpStacey
  });
})

app.get('/pauerhaus', (req, res) => {
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
})

app.get('/rss-rig', (req, res) => {
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
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// function fireUpNicksRig(res) {
//   exec('wakeonlan 98:48:27:40:0A:71', (error, stdout) => {
//     if(error instanceof Error) {
//       res.send({
//         output: stdout,
//         msg: 'something went wrong'
//       });
//     } else {
//       res.send({
//         output: stdout,
//         msg: req.headers.msg || 'launch is successful'
//       });
//     }
//   })
// }

// function fireUpStaceysRig(res) {
//   exec('wakeonlan D8:07:B6:54:DF:32', (error, stdout) => {
//     if(error instanceof Error) {
//       res.send({
//         output: stdout,
//         msg: 'something went wrong'
//       });
//     } else {
//       res.send({
//         output: stdout,
//         msg: req.headers.msg || 'launch is successful'
//       });
//     }
//   })
// }

// function fireUpBoth(res) {
//   const fireUpStacey = wakeOnLan('D8:07:B6:54:DF:32');
//   const fireUpNick = wakeOnLan('98:48:27:40:0A:71');
//   res.send({
//     pauerhaus: fireUpNick,
//     rssrig: fireUpStacey
//   });
// }

function wakeOnLan(macAddress) {
  return exec(`wakeonlan ${macAddress}`, (error, stdout) => {
    if(error instanceof Error) {
      return {
        output: {},
        msg: 'something went wrong'
      }
    } else {
     return {
        output: {},
        msg: req.headers.msg || 'launch is successful'
      }
    }
  })
}
