import React from 'react';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props._id,
      name: this.props.name,
      description: this.props.description,
      reps: this.props.reps,
      sets: this.props.sets,
      category: this.props.category,
      video_url: this.props.video_url,
    }
    this.categories =  [
      {value: 'Upper Body', label: 'Upper Body'},
      {value: 'Lower Body', label: 'Lower Body'},
      {value: 'Core', label: 'Core'},
      {value: 'Cardio', label: 'Cardio'},
      {value: 'Flexibility', label: 'Flexibility'},
    ]
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

  editExercise() {
    const updatedExercise = {
      _id: this.state._id,
      name: this.state.name,
      description: this.state.description,
      reps: this.state.reps,
      sets: this.state.sets,
      category: this.state.category,
      video_url: this.state.video_url
    }
    this.props.editExercise(updatedExercise);
  }

  render() {
    return (
      <div className='form'>
        <h4>Edit Exercise</h4>
        <div className='flex-col'>
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
              <select style={{marginLeft: "10px"}} className='select-field' name='category' value={this.state.category} onChange={this.onChangeCategory.bind(this)}>
              {this.categories.map((category) => (
                <option value={category.value} key={category.value}>{category.label}</option>
              ))}
            </select>
            </div>
            <div className='field'>
              Video URL:
              <input style={{marginLeft: "10px"}} type='text' name='video_url' value={this.state.video_url} onChange={this.onChangeVideoUrl.bind(this)} />
            </div>
            <div className='buttons-flex'>
              <button style={{padding: "10px 20px", background:'#009aff', color:'white', border: '0', borderRadius: '5px', cursor: 'pointer'}}  onClick={this.editExercise.bind(this)}>Save Changes</button>
              <button style={{padding: "10px 20px", background:'white', color:'#596269', border: '1px solid #596269', borderRadius: '5px', cursor: 'pointer'}}  onClick={this.props.closeEditForm.bind(this)}>Cancel</button>
            </div>
        </div>
      </div>
    )
  }
}

export default EditForm;