const {model, Schema} = require('mongoose')

const ExerciseSchema = new Schema({
  type:{
      type:String
  },
  name:{
    type:String
  },
  weight:{
    type: Number
  },
  sets:{
    type: Number
  },
  reps:{
    type: Number
  },
  duration:{
    type: Number
  },
  distance:{
    type: Number

  }
})

module.exports = model ('exercises',ExerciseSchema)