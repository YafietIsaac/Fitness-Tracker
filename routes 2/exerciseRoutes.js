const router = require('express').Router()
const { Exercise } = require('../models')

// GET one exercise
router.get('/exercise/:id', (req, res) => {
  // Find the exercise by its ID
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => console.log(err))
})

// GET all exercises
router.get('/exercises', (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err))
})

// CREATE one exercise
router.post('/exercise', (req, res) => {
  Exercise.create(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

module.exports = router