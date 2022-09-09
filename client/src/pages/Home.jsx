import React from 'react';
import $ from 'jquery';
import NewExerciseForm from '../components/NewExerciseForm.jsx';
import Card from '../components/Card.jsx'
import EditForm from '../components/EditForm.jsx'
import Box from '@mui/material/Box';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      hasEditForm: false,
      selectedExercise: {},
    };
    this.url = 'http://localhost:2000/exercises';
  }

  getExercises () {
    $.get(this.url)
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

  addNewExercise(exerciseObj) {
    console.log('Exercise is adding');
    $.post(this.url, exerciseObj)
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
      url: this.url,
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

  openEditForm(selectedExercise) {
    this.setState({
      hasEditForm: true,
      selectedExercise,
    })
  }

  closeEditForm() {
    this.setState({
      hasEditForm: false,
      selectedExercise: {},
    })
  }

  editExercise(updatedExercise) {
    $.ajax({
      url: this.url,
      type: 'PUT',
      data: updatedExercise,
      success: (exercises) => {
        console.log('Exercise is successfully edited')
        this.setState({
          exercises,
          hasEditForm: false,
          selectedExercise: {},
        })
      },
      fail: () => {
        console.log('Unable to edit exercise.');
      }
    })
  }


  render() {
    return (
      <div className='body-container'>
        <h1>Your Exercise List</h1>
        {this.state.hasEditForm === true
          ? <EditForm
            _id={this.state.selectedExercise._id}
            name={this.state.selectedExercise.name}
            description={this.state.selectedExercise.description}
            reps={this.state.selectedExercise.reps}
            sets={this.state.selectedExercise.sets}
            category={this.state.selectedExercise.category}
            video_url={this.state.selectedExercise.video_url}
            editExercise={this.editExercise.bind(this)}
            closeEditForm={this.closeEditForm.bind(this)}/>
          : <NewExerciseForm addNewExercise={this.addNewExercise.bind(this)} />
        }
        <div className='cards'>
          {this.state.exercises.length === 0 ? <div style={{color:'#7b878e'}}>No exercise yet!</div> : null}
          {this.state.exercises.map((exercise) => (
            <Card
              currentPage='home'
              key={exercise._id}
              _id={exercise._id}
              name={exercise.name}
              description={exercise.description}
              reps={exercise.reps}
              sets={exercise.sets}
              category={exercise.category}
              thumbnail={exercise.thumbnail}
              video_id={exercise.video_id}
              video_url={exercise.video_url}
              deleteFunction={this.deleteExercise.bind(this)}
              openEditForm={this.openEditForm.bind(this)}
              selectedCard={(this.state.selectedExercise.name === exercise.name) ? true : false}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;