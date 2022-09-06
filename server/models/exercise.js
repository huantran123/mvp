import mongoose from 'mongoose';

let exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  reps: Number,
  sets: Number,
  category: String,
  thumbnail: {
    type: String,
    default: ''
  },
  video_url: {
    type: String,
    default: ''
  }
})

let Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;


