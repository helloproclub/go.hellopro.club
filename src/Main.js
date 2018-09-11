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

app.get('/protalk2', (req, res) =>
  res.redirect('https://www.eventbrite.com/e/protalk-skill-development-tickets-45432032432')
);

app.get('/hustlertalk', (req, res) =>
  res.redirect('https://www.eventbrite.com/e/protalk-being-a-business-analyst-at-proclub-tickets-49817742208')
);

app.get('/hackertalk', (req, res) =>
  res.redirect('https://www.eventbrite.com/e/protalk-being-a-programmer-at-proclub-tickets-50117251047')
);

app.listen(envs.port, () =>
  console.log('Application listening on port ' + envs.port + '!')
);
