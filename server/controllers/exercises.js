import Exercise from '../models/exercise.js';

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises)
  } catch (err) {
    res.status(404).json({message: err.message});
  }
}

export const createExercise = async (req, res) => {
  const exercise = req.body;
  console.log(exercise)
  const newExercise = new Exercise(exercise);
  try {
    await newExercise.save();
    res.status(201).json(newExercise)
  } catch (err) {
    res.status(409).json({message: err.message});
  }
}