import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@material-ui/core/Box';

class ExerciseCard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  delete() {
    this.props.deleteFunction(this.props.name);
  }

  render() {
    return (
      <Box m={2} pt={3} >
        <Card sx={{ maxWidth: 300, border: '1px solid #c7c7c7', borderRadius:'15px' }} >
          <CardMedia
            component="iframe"
            height="200"
            image={`https://www.youtube.com/embed/${this.props.video_id}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.props.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Reps: {this.props.reps}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sets: {this.props.sets}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {this.props.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small" onClick={this.delete.bind(this)}>Delete</Button>
          </CardActions>
        </Card>
      </Box>

    );
  }

}

// const ExerciseCard = ({ name, description, reps, sets, category, thumbnail }) => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={thumbnail}
//         alt={name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Reps: {reps}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Sets: {sets}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Category: {category}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Edit</Button>
//         <Button size="small">Delete</Button>
//       </CardActions>
//     </Card>
//   );
// }

export default ExerciseCard;