import React from "react";
import $ from 'jquery';
import Card from '../components/Card.jsx'
import CheckList from '../components/CheckList.jsx'
import EditForm from '../components/EditForm.jsx'


class Monday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercisesNeededToAdd: [],
      mondayExercises: {},
      hasAddExerciseSection: false,
      hasEditForm: false,
      selectedExercise: {},
    }
    this.url = 'http://localhost:2000/workout-day/monday';
    this.exercises_url = 'http://localhost:2000/exercises';
  }

  updateCheckList () {
    $.get('http://localhost:2000/exercises')
      .done((exercises) => {
        var exercisesNeededToAdd = [];
        for (var exercise of exercises) {
          if (this.state.mondayExercises[exercise._id] === undefined) {
            exercisesNeededToAdd.push(exercise);
          }
        }
        this.setState({
          exercisesNeededToAdd
        })
      })
      .fail(() => {
        console.log('Cannot get exercises')
      })
  }

  getWorkoutDayExercises () {
    $.get(this.url)
      .done((exercises) => {
        const mondayExercises = {};
        for (var exercise of exercises) {
          mondayExercises[exercise._id] = exercise;
        }
        this.setState({
          mondayExercises
        });
      })
      .fail(() => {
        console.log('Cannot get exercises')
      })
  }

  componentDidMount() {
    this.getWorkoutDayExercises();
    this.updateCheckList();
  }

  openAddSection () {
    this.setState({
      hasAddExerciseSection: true
    })
  }

  closeAddSection () {
    this.setState({
      hasAddExerciseSection: false,
    })
  }

  addExercisesToDay (exerciseList) {
    console.log('Exercise is adding to Monday list');
    $.post(this.url, {exerciseList: exerciseList})
      .done((exercises) => {
        console.log('Exercise is successfully added to Monday list!');
        const mondayExercises = {};
        for (var exercise of exercises) {
          mondayExercises[exercise._id] = exercise;
        }
        this.setState({
          mondayExercises,
          hasAddExerciseSection: false
        });
        this.updateCheckList();
      })
      .fail(() => {
        console.log('Unable to add exercises.');
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
      url: this.exercises_url,
      type: 'PUT',
      data: updatedExercise,
      success: (exercises) => {
        console.log('Exercise is successfully edited')
        this.setState({
          hasEditForm: false,
          selectedExercise: {},
        })
        this.getWorkoutDayExercises();
      },
      fail: () => {
        console.log('Unable to edit exercise.');
      }
    })
  }

  deleteExercise(exerciseId) {
    $.ajax({
      url: this.url,
      type: 'PUT',
      data: {_id: exerciseId},
      success: (exercises) => {
        console.log('Exercise is successfully removed!')
        const mondayExercises = {};
        for (var exercise of exercises) {
          mondayExercises[exercise._id] = exercise;
        }
        this.setState({
          mondayExercises
        });
        this.updateCheckList();
      },
      fail: () => {
        console.log('Unable to remove exercise.');
      }
    })
  }

  render() {
    return (
      <div className='body-container'>
        <h1>Monday Workout</h1>
        {!this.state.hasAddExerciseSection
          ? <button style={{padding: "10px 20px", background:'#009aff', color:'white', border: '0', borderRadius: '5px', cursor: 'pointer'}}  onClick={this.openAddSection.bind(this)}>Add Exercises</button>
          : <CheckList exerciseList={this.state.exercisesNeededToAdd} addExercisesToDay={this.addExercisesToDay.bind(this)} closeAddSection={this.closeAddSection.bind(this)} />}
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
          : null
        }
        <div className='cards'>
          {Object.values(this.state.mondayExercises).length === 0 ? <div style={{color:'#7b878e'}}>No exercise yet!</div> : null}
          {Object.values(this.state.mondayExercises).map((exercise) => (
            <Card
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
    )
  }
}

export default Monday;