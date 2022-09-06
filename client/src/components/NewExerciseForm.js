import React from 'react';

class NewExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      reps: 0,
      sets: 0,
      category: 'Upper Body',
      video_url: ''
    }

    // this.categories = ['Upper Body', 'Lower Body', 'Core', 'Cardio', 'Flexibility'];
    this.categories =  [
      {value: 'Upper Body', label: 'Upper Body'},
      {value: 'Lower Body', label: 'Lower Body'},
      {value: 'Core', label: 'Core'},
      {value: 'Cardio', label: 'Cardio'},
      {value: 'Flexibility', label: 'Flexibility'},
    ]

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeReps = this.onChangeReps.bind(this);
    this.onChangeSets = this.onChangeSets.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeVideoUrl = this.onChangeVideoUrl.bind(this);
  }

  onChangeName (e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription (e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeReps (e) {
    this.setState({
      reps: e.target.value
    });
  }

  onChangeSets (e) {
    this.setState({
      sets: e.target.value
    });
  }

  onChangeCategory (e) {
    this.setState({
      category: e.target.value
    });
  }

  onChangeVideoUrl (e) {
    this.setState({
      video_url: e.target.value
    });
  }

  addExercise() {
    var newExercise = {
      name: this.state.name,
      descript: this.state.description,
      reps: this.state.reps,
      sets: this.state.sets,
      category: this.state.category,
      video_url: this.state.video_url
    }
    // var newExercise = {
    //   name: 'Shouder Press',
    //   descript: '',
    //   reps: 12,
    //   sets: 2,
    //   category: 'Upper Body',
    //   video_url: 'https://youtu.be/qEwKCR5JCog'
    // }
    this.props.addNewExercise(newExercise);
    this.setState({
      name: '',
      description: '',
      reps: 0,
      sets: 0,
      category: '',
      video_url: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Add New Exercise</h1>
        <div className='field'>
          Name:
          <input type='text' name='name' value={this.state.name} onChange={this.onChangeName.bind(this)} />
        </div>
        <div className='field'>
          Description:
          <input type='text' name='ex-description' value={this.state.description} onChange={this.onChangeDescription.bind(this)} />
        </div>
        <div className='field'>
          Reps:
          <input type='number' name='ex-reps' value={this.state.reps} onChange={this.onChangeReps.bind(this)} />
        </div>
        <div className='field'>
          Sets:
          <input type='number' name='ex-sets' value={this.state.sets} onChange={this.onChangeSets.bind(this)} />
        </div>
        <div>
          Category:
          <select className='select-field' value='this.state.category' onChange={this.onChangeCategory.bind(this)}>
          {this.categories.map((category) => (
            <option value={category.value} key={category.value}>{category.label}</option>
          ))}
        </select>
        </div>
        <div className='field'>
          Video URL:
          <input type='text' id='ex-video-url' value={this.state.video_url} onChange={this.onChangeVideoUrl.bind(this)} />
        </div>
        <button onClick={this.addExercise.bind(this)}>Add Exercise</button>
      </div>
    )
  }
}

export default NewExerciseForm;