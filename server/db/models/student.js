'use strict'

const db = require('../index');
const Sequelize = require('sequelize');


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
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT
    // constrain to have only one decimal place?
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  // , {
  //   defaultScope: {
  //     attributes: {
  //       include: ['campusId'],
  //     }
  //   },
  //   scopes: {
  //     populated: () => {
  //       include: [{
  //         model: db.model('campus')
  //       }]
  //     }
  //   }
  // }
});

// Must be assigned to a campus - some way, somehow

module.exports = Student;
