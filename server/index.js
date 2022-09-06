import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import exerciseRoutes from './routes/exercises.js';
import workoutDayRoutes from './routes/workoutDays.js';


mongoose.connect('mongodb://localhost/workout_tracklist');

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.use('/exercises', exerciseRoutes);
app.use('/workout-day', workoutDayRoutes);


let port = 2000;

app.listen(port, () => {
  console.log( `Listening on port ${port}`);
})