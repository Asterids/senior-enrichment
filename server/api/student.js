const router = require('express').Router();
const models = require('../db/models');
const Student = models.Student;

router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
})

router.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(foundStudent => {
      return foundStudent.update(req.body)
    })
    .then(updatedStudent => {
      res.status(200).json(updatedStudent)
    })
    .catch(next);
})

router.delete('/:studentId', (req, res, next) => {
  Student.destroy({ where: {
    id: req.params.studentId
  } })
    .then(() => {
      res.status(202).json(req.params.studentId)
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  var newStudent = Student.build(req.body);
  newStudent.save()
    .then(savedStudent => {
      res.status(201).json(savedStudent)
    })
    .catch(next);
})

router.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
})

module.exports = router;
