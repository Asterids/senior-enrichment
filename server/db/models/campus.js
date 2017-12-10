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
    allowNull: false,
    defaultValue: 'https://cdn.bestdegreeprograms.org/wp-content/uploads/2015/02/Rhodes-College-Most-Beautiful-Campus.jpg'
  },
  description: Sequelize.TEXT
});
