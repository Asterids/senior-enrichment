'use strict'

const db = require('../db');
const Sequelize = require('sequelize');


module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.firstName + ' ' + this.lastName
    }
  },
  lastNameFirst: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.lastName + ', ' + this.firstName;
    }
  }
});
