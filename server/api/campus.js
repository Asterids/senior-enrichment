const router = require('express').Router();
const models = require('../db/models');
const Campus = models.Campus;


router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
})

router.put('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(foundCampus => {
      return foundCampus.update(req.body)
    })
    .then(updatedCampus => {
      res.json(updatedCampus)
    })
    .catch(next);
})

router.delete('/:campusId', (req, res, next) => {
  Campus.destroy({where: {
    id: req.params.campusId
  }})
    .then(() => {
      res.status(202).json(req.params.campusId)
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
  var newCampus = Campus.build(req.body);
  newCampus.save()
    .then(savedCampus => {
      res.status(201).json(savedCampus)
    })
    .catch(next);
})

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
})

module.exports = router;
