import React from 'react';
import $ from 'jquery';
import NewExerciseForm from '../components/NewExerciseForm';
import Card from '../components/Card.js'
import Box from '@material-ui/core/Box';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    }
  }

  getExercises () {
    $.get('http://localhost:2000/exercises')
      .done((exercises) => {
        this.setState({
          exercises
        })
      })
      .fail(() => {
        console.log('Cannot get exercises')
      })
  }

  componentDidMount() {
    this.getExercises();
  }

  addNewExercise (exerciseObj) {
    console.log('Exercise is adding');
    $.post('http://localhost:2000/exercises', exerciseObj)
      .done((exercises) => {
        console.log('Exercise is successfully added!')
        // this.getExercises();
        this.setState({
          exercises
        })
      })
      .fail(() => {
        console.log('Unable to add exercise.');
      })
  }

  deleteExercise(exerciseName) {
    $.ajax({
      url: 'http://localhost:2000/exercises',
      type: 'DELETE',
      data: {name: exerciseName},
      success: (exercises) => {
        console.log('Exercise is successfully removed!')
        this.setState({
          exercises
        })
      },
      fail: () => {
        console.log('Unable to remove exercise.');
      }
    })
  }



  render() {
    return (
      <div>
        <h1>Your Exercise List</h1>
        <NewExerciseForm addNewExercise={this.addNewExercise.bind(this)} />
        {this.state.exercises.length === 0 ? <div style={{color:'#7b878e'}}>No exercise yet!</div> : null}
        <div className='cards'>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
            {this.state.exercises.map((exercise) => (
              <Card
                currentPage='home'
                key={exercise._id}
                name={exercise.name}
                description={exercise.description}
                reps={exercise.reps}
                sets={exercise.sets}
                category={exercise.category}
                thumbnail={exercise.thumbnail}
                video_id={exercise.video_id}
                deleteFunction={this.deleteExercise.bind(this)}
              />
            ))}
          </Box>
        </div>
      </div>
    );
  }
}

export default Home;