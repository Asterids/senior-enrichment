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
    defaultValue: 'Some URL' // which default URL ??
  },
  description: Sequelize.TEXT
});


module.exports = Campus;
