'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express().use(bodyParser.json())

app.post('/webhook', (req, res) => {
  const data = {
    responses: [
      {
        type: 'text',
        elements: ['Hi', 'Hello']
      }
    ]
  }
  res.status(200)
  res.json(data)
})

app.listen(3001, () => console.log('Webhook is listening on 3001'))
