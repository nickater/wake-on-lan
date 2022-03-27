import express from 'express';
import { send } from './src/wake-on-lan.js'
const app = express();

const port = process.env.WOL_PORT || 3001;
const envVars = process.env
const macAddresses = [];

Object.keys(envVars).forEach(variable => {
  if (variable.startsWith('WOL_') && !variable.includes('PORT')) {
    let cleanVar = variable.replace('WOL_', '').toLowerCase();
    macAddresses.push({ key: cleanVar, value: envVars[variable] })
  }
})

if (macAddresses.length === 0) {
  throw new Error('No MAC address environment variables set with a key that start with WOL_')
} else {
  console.log('Your WOL endpoints have been setup. They are:')
  macAddresses.forEach(address => console.log(`/${address.key}`))
}

macAddresses.forEach(endpoint => {
  app.get(`/${endpoint.key}`, async (req, res) => {
    try {
      const result = await send(endpoint.value);
      res.send({ msg: 'OK', result })
    } catch (error) {
      res.json(error).send()
    }
  })
})

app.listen(port, () => {
  console.log(`WOL app listening at http://localhost:${port}`)
})

