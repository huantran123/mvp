import express from 'express';

import {getWorkoutDay, createWorkoutDay, removeExercise} from '../controllers/workoutDays.js';

const router = express.Router();

// router.param('day', (req, res, next, id) => {
//   next();
// })
router
  .route('/:day')
  .get(getWorkoutDay)
  .post(createWorkoutDay)
  .put(removeExercise)


export default router;