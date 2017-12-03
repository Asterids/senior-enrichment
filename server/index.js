'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')); // include our routes!

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  // var err = new Error("Sorry, the page you requested was not found.");
  // err.status = 404;
  // next(err);
}); // Send index.html for any other requests - NO, send '404' status instead! (not found)

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  // if (res.headersSent) {  // is this necessary ?
  //   return next(err)
  // }
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
