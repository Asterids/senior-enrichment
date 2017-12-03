const router = require('express').Router();
const Student = require('../db/models'.Student);

router.get('/students/:studentId', (req, res, next) => {
  Student.findById({req.params.studentId})
    .then(student => res.json(student))
    .catch(next);
})

router.put('/student/:studentId', (req, res, next) => {
  //req.student.update(req.body)
  //  .then(student => res.status(200).json(student))
  //  .catch(next);
  Student.findById(req.params.id)
    .then(foundStudent => {
      return foundStudent.update(req.body)
    })
    .then(updatedStudent => {
      res.status(200).json(updatedStudent)
    })
    .catch(next);
})

router.delete('/students/:studentId', (req, res, next) => {
  Student.destroy({ where: {
    id: req.params.studentId
  } })
    .then(deletedStudent => {
      res.status(202).json(deletedStudent)
    })
    .catch(next);
})

router.post('/student', (req, res, next) => {
  var newStudent = Student.build(req.body);
  newStudent.save()
    .then(savedStudent => {
      res.status(201).json(savedStudent)
    })
    .catch(next);
})

router.get('/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
})
