import WorkoutDay from '../models/workoutDay.js';

export const getWorkoutDay = async (req, res) => {
  try {
    const filter = {day: req.params.day};
    const workoutDay = await WorkoutDay.findOne(filter).populate('exercises');
    if (workoutDay) {
      res.status(200).json(workoutDay.exercises);
    } else {
      res.status(200).json([]);
    }

  } catch (err) {
    res.status(404).json({message: err.message});
  }
}

export const createWorkoutDay = async (req, res) => {
  const exerciseIdList = req.body.exerciseList;
  const filter = {day: req.params.day};
  try {
    const existedWorkoutday = await WorkoutDay.findOne(filter);
    if (!existedWorkoutday) {
      const workoutDay = await WorkoutDay.create({
        day: req.params.day,
        exercises: exerciseIdList
      })
    } else {
      const updatedExerciseIdList = existedWorkoutday.exercises.concat(exerciseIdList);
      const workoutDay = await WorkoutDay.updateOne(filter, {
        $set: {exercises: updatedExerciseIdList}
      })
    }
    const workoutDay = await WorkoutDay.findOne(filter).populate('exercises');
    res.status(201).json(workoutDay.exercises);
  } catch (err) {
    res.status(409).json({message: err.message});
  }
}

export const removeExercise = async (req, res) => {
  const filter = {day: req.params.day};
  const id = req.body._id;
  try {
    await WorkoutDay.updateOne(filter, {$pull: {exercises: id}});
    const workoutDay = await WorkoutDay.findOne(filter).populate('exercises');
    res.status(200).json(workoutDay.exercises)
  } catch (err) {
    res.status(409).json({message: err.message});
  }

}
