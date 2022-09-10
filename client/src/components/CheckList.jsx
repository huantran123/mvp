import React from 'react';

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: []
    }
  }

  handleCheck(e) {
    var checkList = [...this.state.checkList];
    if (e.target.checked) {
      checkList.push(e.target.value);
    } else {
      checkList.splice(checkList.indexOf(e.target.value), 1)
    }
    console.log(checkList);
    this.setState({checkList})
  }

  addExercisesToDay() {
    this.props.addExercisesToDay(this.state.checkList);
  }

  closeAddSection() {
    this.props.closeAddSection();
  }

  render() {
    return (
      <div>
        <h4 className='title'>Add More Exercises</h4>
        <div className='list-container'>
          {this.props.exerciseList.map((exercise, index) => (
            <div key={index}>
              <input value={exercise._id} type="checkbox" onChange={this.handleCheck.bind(this)}/>
              <span style={{marginLeft: "10px"}}>{exercise.name}</span>
            </div>
          ))}
        </div>
        <div className='buttons-flex'>
          <button style={{padding: "10px 20px", background:'#009aff', color:'white', border: '0', borderRadius: '5px', cursor: 'pointer'}}  onClick={this.addExercisesToDay.bind(this)}>Add Exercises</button>
          <button style={{padding: "10px 20px", background:'white', color:'#596269', border: '1px solid #596269', borderRadius: '5px', cursor: 'pointer'}}  onClick={this.props.closeAddSection.bind(this)}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default CheckList;