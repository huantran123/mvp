import mongoose from 'mongoose';

let workoutDaySchema = mongoose.Schema({
  day: {
    type: String,
    unique: true
  },
  exercises: [String],
  done: Boolean
})

let WorkoutDay = mongoose.model('WorkoutDay', workoutDaySchema);

export default WorkoutDay;