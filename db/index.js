const mongoose = require('mongoose')

const db = mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/workout', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

module.exports = db