const router = require('express').Router()

router.use('/', require('./viewRoutes.js'))
router.use('/', require('./workoutRoutes.js'))

module.exports = router