import express from 'express';

import {getExercises, createExercise, updateExercise, deleteExercise} from '../controllers/exercises.js';

const router = express.Router();

router.get('/', getExercises);
router.post('/', createExercise);
router.put('/', updateExercise);
router.delete('/', deleteExercise);

export default router;