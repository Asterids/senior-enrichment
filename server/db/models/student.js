'use strict'

const db = require('../index.js');
const Sequelize = db.Sequelize;


const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    // type: Sequelize.STRING  ??
    // how to validate email address?
    allowNull: false
  },
  gpa: {
    type: Sequelize.FLOAT
    // constrain to have only one decimal place
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

// Must be assigned to a campus.

module.exports = Student;
