'use strict'

const db = require('../db')
const Sequelize = require('sequelize');

const Student = require('./student')

const Campus = db.define('campus', {
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

Campus.beforeDestroy((instance) => {
  return Student.destroy({where: {
    campus_id: instance.id
  }})
})

module.exports = Campus;
