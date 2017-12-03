'use strict'
const apiRouter = require('express').Router();
const db = require('../db');
const path = require('path');
// const bodyParser = require('body-parser');
// DO NOT NEED body parser here because it is already in server/index.js
// apiRouter.use(bodyParser.json());
// apiRouter.use(bodyParser.urlencoded({ extended: true }));

apiRouter.use('/campuses', require('./campus'));
apiRouter.use('/students', require('./student'));

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// apiRouter.get('/', (req, res) => { // instead of below ???
//   res.status(404).end()
// })

apiRouter.use((req, res, next) => {
  if (path.extname(req.path).length) {
    res.status(404).end()
  } else {
    next(null)
  }
})

apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = apiRouter;

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create
