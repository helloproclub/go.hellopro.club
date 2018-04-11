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

app.get('/lineocp', (req, res) =>
  res.redirect('http://line.me/R/ti/g/P6DOqQrunS')
);

app.get('/protalk1', (req, res) =>
  res.redirect('https://www.eventbrite.com/e/protalk-visual-branding-for-startup-tickets-45057584448')
);

app.listen(envs.port, () =>
  console.log('Application listening on port ' + envs.port + '!')
);
