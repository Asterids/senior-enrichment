const router = require('express').Router();
const Campus = require('../db/models'.Campus);

router.get('/campuses/:campusId', (req, res, next) => {
  Campus.findById({req.params.campusId})
    .then(campus => res.json(campus))
    .catch(next);
})

router.put('/campus/:campusId', (req, res, next) => {
  // req.campus.update(req.body)
  //   .then(campus => res.status(200).json(campus))
  //   .catch(next);
  Campus.findById(req.params.id)
    .then(foundCampus => {
      return foundCampus.update(req.body)
    })
    .then(updatedCampus => {
      res.json(updatedCampus)
    })
    .catch(next);
})

router.delete('/campuses/:campusId', (req, res, next) => {
  Campus.destroy({where: {
    id: req.params.campusId
  }})
    .then(deletedCampus => {
      res.status(202).json(deletedCampus)
    })
    .catch(next);
})

router.post('/campuses', (req, res, next) => {
  var newCampus = Campus.build(req.body);
  newCampus.save()
    .then(savedCampus => {
      res.status(201).json(savedCampus)
    })
    .catch(next);
})

router.get('/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})
