import React from "react";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon';
import { Link as RouterLink  } from "react-router-dom";

import {
  ProblemCards, ProblemCardLink,ProblemCardMedia,
  CallToActionBtn2
} from '../static/stylingComponents'




const ImageSetter = require('../static/stylingComponents/ImageSetter')


const ProblemCard = props => {

  const problem = props.problems;

  return (
    <ProblemCards>
      <ProblemCardLink component={RouterLink} to={`/problem-details/${problem.id}`}>
        <ProblemCardMedia
          component="img"
          src={ ImageSetter.staticImage(problem.problem_category)}
          title={problem.problem_title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" color="textSecondary" component="h2">
              {problem.problem_title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          
              <Icon>{ImageSetter.staticIcon(problem.problem_category)}</Icon>
              {problem.problem_category}
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {problem.problem_description.substring(0, 50) + "..."}
          </Typography>
        </CardContent>
      </ProblemCardLink>
        <CardActions>
          <CallToActionBtn2 size="medium" color="primary" href={`/problem-details/${problem.id}`} >
            Learn More
          </CallToActionBtn2>
        </CardActions>
    </ProblemCards>
  );
};

export default ProblemCard;
