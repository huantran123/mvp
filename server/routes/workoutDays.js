import express from 'express';

import {getWorkoutDay} from '../controllers/workoutDays.js';

const router = express.Router();

// router.param('day', (req, res, next, id) => {
//   next();
// })
router.route('/:day').get(getWorkoutDay)


export default router;