'use strict';

const Student = require('./student')
const Campus = require('./campus')

Student.belongsTo(Campus, {foreignKey: 'campus_id', onDelete: 'cascade', hooks: true}); // adds a "campusId" to the Student model, also student.getCampus() method
Campus.hasMany(Student, {foreignKey: 'campus_id', onDelete: 'cascade', hooks: true}); // adds a "campusId" column to Student model, also campus.getStudents() method

module.exports = {
  Student,
  Campus
}
