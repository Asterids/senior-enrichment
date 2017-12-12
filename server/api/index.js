'use strict'
const apiRouter = require('express').Router();
const db = require('../db');
const path = require('path');

apiRouter.use('/campuses', require('./campus'));
apiRouter.use('/students', require('./student'));

apiRouter.use((req, res, next) => {
  if (path.extname(req.path).length) {
    res.status(404).end()
  } else {
    next(null)
  }
})

apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = apiRouter;
