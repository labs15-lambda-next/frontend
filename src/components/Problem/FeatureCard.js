import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  Icon
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const ImageSetter = require("../../static/stylingComponents/ImageSetter");

const styles = {
  problemCards: { boxShadow: "1.5px silver", borderRadius: "0px" },
  bolded: { fontWeight: "bold" },
  featureCard: {
    padding: "1.25rem",
    textAlign: "center",
    width: "100%",
    background: "#bb1333",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  noTextDecoration: { textDecoration: "none" }
};

const FeatureCard = props => {
  const { problem, classes } = props;

  return (
    <Link to={`/problems/${problem.id}`} className={classes.noTextDecoration}>
      <Card className={classes.problemCards}>
        <CardMedia
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
          <Grid container item>
            <CardContent
              style={{
                padding: 5,
                textAlign: "center",
                width: "100%",
                background: "#bb1333",
                color: "#fff"
              }}
            >
              <Grid container alignItems="center">
                {
                  <Icon>
                    {ImageSetter.staticIcon(problem.problem_category)}
                  </Icon>
                }

                <Tooltip title={problem.problem_title}>
                  <Typography
                    className={classes.bolded}
                    noWrap
                    gutterBottom
                    variant="body2"
                    color="initial"
                    component="h3"
                    style={{ padding: 5, justify: "center" }}
                  >
                    {problem.problem_title.length > 20
                      ? problem.problem_title.substring(0, 20) + "..."
                      : problem.problem_title}
                  </Typography>
                </Tooltip>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Link>
  );
};

FeatureCard.defaultProps = {
  problem: {},
  classes: {}
};

FeatureCard.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string
  }),
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(FeatureCard);
