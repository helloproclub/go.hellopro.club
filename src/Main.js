/*!
 * go.hellopro.club
 * URL shortener for Proclub Events
 */

const express = require('express');
const app = express();

const envs = {
  port: process.env.PORT || 3000,
};

app.get('/ocp1', (req, res) =>
  res.redirect('https://www.hackerrank.com/proclub-open-cp-i')
);

app.listen(envs.port, () =>
  console.log('Application listening on port ' + envs.port + '!')
);

