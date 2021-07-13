import React, { useState, useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import Button from "@material-ui/core/Button";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Timer(props) {
  useEffect(() => {
    if (props.end) {
      stop();
      console.log("Game End: ", props.timeState);
    }
  }, [props.gameEnd]);

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autostart: false });

  const stop = () => {
    props.getTime(() => {
      let timeState = { ...props.timeState };
      props.timeState["time"] = { min: minutes, sec: seconds, hr: hours };
      return timeState;
    });
    // console.log(props.timeState);
    reset();
    pause();
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  const header = {
    padding: 10,
    textAlign: "center",
  };

  return (
    <div style={header}>
      <Grid item xs={4}>
        <Paper className={classes.paper}>
          <span className="header__group-one">{minutes}</span>:
          <span className="header__group-two">{seconds}</span>
        </Paper>{" "}
      </Grid>
      <p>{isRunning ? "running" : "stopped here"}</p>
      <Button
        variant="contained"
        color="primary"
        onClick={isRunning ? () => {} : start}
      >
        start
      </Button>
      <Button variant="contained" color="secondary" onClick={pause}>
        pause
      </Button>
      <Button variant="contained" color="red" onClick={() => stop()}>
        stop
      </Button>
    </div>
  );
}
