import React from 'react';
import $ from 'jquery';
import NewExerciseForm from '../components/NewExerciseForm';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: []
    }
  }

  getExercises () {
    $.get('/exercises')
      .data((exercises) => {
        this.setState({
          exercises
        })
      })
      .fail(() => {
        console.log('Cannot get exercises')
      })
  }

  componetDidMount() {
    this.getExercises();
  }

  addNewExercise (exerciseObj) {
    console.log('Exercise is adding');
    $.post('http://localhost:2000/exercises', exerciseObj)
      .done((data) => {
        console.log('Exercise is successfully added!')
        console.log(data);
        // this.getExercises();
      })
      .fail(() => {
        console.log('Unable to add exercise.');
      })
  }

  addExercise() {
    // var newExercise = {
    //   name: this.state.name,
    //   descript: this.state.description,
    //   reps: this.state.reps,
    //   sets: this.state.sets,
    //   category: this.state.category,
    //   video_url: this.state.video_url
    // }
    var newExercise = {
      name: 'Shouder Press',
      descript: '',
      reps: 12,
      sets: 2,
      category: 'Upper Body',
      video_url: 'https://youtu.be/qEwKCR5JCog'
    }
    $.post('/exercises', newExercise)
      .done((data) => {
        console.log('Exercise is successfully added!')
        console.log(data);
        // this.getExercises();
      })
      .fail(() => {
        console.log('Unable to add exercise.');
      })
    // this.setState({
    //   name: '',
    //   description: '',
    //   reps: 0,
    //   sets: 0,
    //   category: this.categories[0],
    //   video_url: ''
    // })
  }

  render() {
    return (
      <div>
        <h1>Your Exercise List</h1>
        <NewExerciseForm addNewExercise={this.addNewExercise.bind(this)} />
      </div>
    );
  }
}

export default Home;