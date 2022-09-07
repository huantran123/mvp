import Exercise from '../models/exercise.js';
import { getVideoId, getThumbnail } from '../helpers/youtube.js';
import upperCaseFirstLetters from '../helpers/name.js'

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises)
  } catch (err) {
    res.status(404).json({message: err.message});
  }
}

export const createExercise = async (req, res) => {
  const exercise = {
    name: upperCaseFirstLetters(req.body.name),
    description: req.body.description,
    reps: req.body.reps,
    sets: req.body.sets,
    category: req.body.category,
    thumbnail: getThumbnail(req.body.video_url),
    video_url: req.body.video_url,
    video_id: getVideoId(req.body.video_url)
  }
  console.log(exercise)
  const newExercise = new Exercise(exercise);
  try {
    await newExercise.save();
    res.status(201).json(newExercise)
  } catch (err) {
    res.status(409).json({message: err.message});
  }
}