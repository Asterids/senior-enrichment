'use strict'

const db = require('../index')
const Sequelize = db.Sequelize;


const Campus = db.define('campus', {
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


module.exports = Campus;
