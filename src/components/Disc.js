import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Disc(props) {
  const discStyle =
    props.current && props.index === 0
      ? {
          background: "blue",
          margin:"auto"
        }
      : {
          background: "yellow",
          margin: "auto"
        };

  const outerStyle = {
          margin: "auto",
        }

  const useStyles = makeStyles((theme) => ({
          root: {
            flexGrow: 1,
          },
          paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
            margin: "auto"
          },
        }));
      
  const classes = useStyles();

  return (
    <Grid item xs={props.length} style={outerStyle}>
        <Paper className={classes.paper} style={discStyle}>
          ||
        </Paper>
      </Grid>
  );
}
