'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const ev = require('express-validation');

app.use(express.static('./public'));

app.use(bodyParser.json());

const users = require('./routes/users');

app.use('/users', users);

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status)
      .send(err.responseText);
  }
  console.error(err);
  res.sendStatus(500);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
