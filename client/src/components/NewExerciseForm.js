import React from 'react';
import Box from '@material-ui/core/Box';

class NewExerciseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      reps: '',
      sets: '',
      category: 'Upper Body',
      video_url: ''
    }

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
      description: this.state.description,
      reps: this.state.reps,
      sets: this.state.sets,
      category: this.state.category,
      video_url: this.state.video_url
    }
    this.props.addNewExercise(newExercise);
    this.setState({
      name: '',
      description: '',
      reps: 0,
      sets: 0,
      category: 'Upper Body',
      video_url: ''
    })
  }

  render() {
    return (
      <div style={{marginBottom:'30px'}}>
        <h3>Add New Exercise</h3>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'flex-start' , alignItems: 'flex-start', gap:'10px', paddingLeft: '20px'}}>
          <div className='field'>
            Name:
            <input style={{marginLeft: "10px"}} type='text' name='name' value={this.state.name} onChange={this.onChangeName.bind(this)} />
          </div>
          <div className='field'>
            Description:
            <input style={{marginLeft: "10px"}} type='text' name='description' value={this.state.description} onChange={this.onChangeDescription.bind(this)} />
          </div>
          <div className='field'>
            Reps:
            <input style={{marginLeft: "10px"}} type='number' name='reps' value={Number(this.state.reps).toString()} onChange={this.onChangeReps.bind(this)} />
          </div>
          <div className='field'>
            Sets:
            <input style={{marginLeft: "10px"}} type='number' name='sets' value={Number(this.state.sets).toString()} onChange={this.onChangeSets.bind(this)} />
          </div>
          <div>
            Category:
            <select style={{marginLeft: "10px"}} className='select-field' name='category' value='this.state.category' onChange={this.onChangeCategory.bind(this)}>
            {this.categories.map((category) => (
              <option value={category.value} key={category.value}>{category.label}</option>
            ))}
          </select>
          </div>
          <div className='field'>
            Video URL:
            <input style={{marginLeft: "10px"}} type='text' name='video_url' value={this.state.video_url} onChange={this.onChangeVideoUrl.bind(this)} />
          </div>
          <button style={{padding: "10px 20px", background:'#009aff', color:'white', border: '0', borderRadius: '5px', cursor: 'pointer'}}  onClick={this.addExercise.bind(this)}>Add Exercise</button>
        </Box>
      </div>
    )
  }
}

export default NewExerciseForm;