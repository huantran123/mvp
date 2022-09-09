import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class ExerciseCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selected: this.props.selectedCard,
  //   }
  // }

  edit() {
    const selectedExercise = {
      _id: this.props._id,
      name: this.props.name,
      description: this.props.description,
      reps: this.props.reps,
      sets: this.props.sets,
      category: this.props.category,
      video_url: this.props.video_url
    }
    this.props.openEditForm(selectedExercise);
  }

  delete() {
    this.props.deleteFunction(this.props.name);
  }


  render() {
    return (
      <Box m={2} pt={3}>
        <Card sx={{ width: '360px', border: (!this.props.selectedCard) ? '1px solid #c7c7c7' : '5px solid red' , borderRadius:'15px' }} >
          <CardMedia
            component="iframe"
            height="200px"
            image={`https://www.youtube.com/embed/${this.props.video_id}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {this.props.description === '' ? 'N/A' : this.props.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reps: {this.props.reps === null ? 'N/A' : this.props.reps}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sets: {this.props.sets === null ? 'N/A' : this.props.sets}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {this.props.category === '' ? 'N/A' : this.props.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={this.edit.bind(this)}>Edit</Button>
            <Button size="small" onClick={this.delete.bind(this)}>Delete</Button>
          </CardActions>
        </Card>
      </Box>

    );
  }

}


export default ExerciseCard;