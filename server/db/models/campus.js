'use strict'

const db = require('../db')
const Sequelize = require('sequelize');


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '../../../public/img/alternate5.jpg' // choose an img file from '../../../public'
  },
  description: Sequelize.TEXT
});
