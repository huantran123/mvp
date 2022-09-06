import WorkoutDay from '../models/workoutDay.js';

export const getWorkoutDay = async (req, res) => {
  try {
    const workoutDay = await WorkoutDay.find({day: req.params.day});
    console.log(req.params.day)
    res.status(200).json(workoutDay)
  } catch (err) {
    res.status(404).json({message: err.message});
  }
}
