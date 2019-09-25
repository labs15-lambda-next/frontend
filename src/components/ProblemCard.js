import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";

const ImageSetter = require("../static/stylingComponents/ImageSetter");

const styles = {
  problemCards: { boxShadow: "1.5px 1.5px silver", borderRadius: "0px" },
  backgroundWhite: { backgroundColor: "white", width: "100%" },
  callToActionBtn2: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  bolded: { fontWeight: "bold" },
  padded: { paddingBottom: "1rem", paddingRight: "1rem", paddingLeft: "1rem" },
  buttonPadding: { padding: "0.5rem" }
};

const ProblemCard = props => {
  const { problem, classes } = props;

  console.log(problem);

  return (
    <Card className={classes.problemCards}>
      <CardMedia
        className={classes.backgroundWhite}
        component="img"
        src={ImageSetter.staticImage(problem.problem_category)}
        title={problem.problem_title}
      />
      <Grid
        container
        justify="space-between"
        alignItems="flex-end"
        className={classes.backgroundWhite}
      >
        <Grid item>
          <CardContent>
            <Tooltip title={problem.problem_title}>
              <Typography
                className={classes.bolded}
                noWrap
                gutterBottom
                variant="h5"
                color="initial"
                component="h3"
              >
                {problem.problem_title.length > 20
                  ? problem.problem_title.substring(0, 20) + "..."
                  : problem.problem_title}
                :
              </Typography>
            </Tooltip>
            <Typography variant="body2" component="p" gutterBottom>
              {problem.problem_description > 40
                ? problem.problem_description.substring(0, 40) + "..."
                : problem.problem_description}
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              component="p"
            >
              Category: {problem.problem_category}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          container
          alignItems="center"
          direction="row-reverse"
        >
          <Grid item xs={12} sm={6} className={classes.buttonPadding}>
            <Typography variant="body2" component="p" align="center">
              # of Sign Ups: <span className={classes.bolded}>{1}</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              className={classes.callToActionBtn2}
              size="medium"
              color="primary"
              href={`/problem-details/${problem.id}`}
              fullWidth
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

ProblemCard.defaultProps = {
  problem: {},
  classes: {}
};

ProblemCard.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string,
    problem_description: PropTypes.string
  }),
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ProblemCard);
