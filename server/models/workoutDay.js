import mongoose from 'mongoose';

let workoutDaySchema = mongoose.Schema({
  day: {
    type: String,
    unique: true
  },
  exercises: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'Exercise'
  },
})

let WorkoutDay = mongoose.model('WorkoutDay', workoutDaySchema);

export default WorkoutDay;