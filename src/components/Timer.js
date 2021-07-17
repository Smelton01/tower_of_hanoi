import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Grid, Paper} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Timer(props) {

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
    margin: "auto",
  };
    // const {end} = props
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      // start - pause
      setIsActive(!isActive);
      props.setRunning(!props.running)
    
    }
  
    function reset() {
      props.getTime(time)
      setTime(0);
      setIsActive(false);
      props.setRunning(false)

    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setTime(seconds => seconds + 1);
        }, 10);
      } else if (!isActive && time !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, time]);

const timerStyle = {
  background: "#68f",
  color: "white",
  fontWeight: "bold"

}
  return (
    <div style={header}>
      <Grid item xs={4} style={header}>
        <Paper className={classes.paper} style={timerStyle}>
          <span >{(Math.floor(time/6000)+"").padStart(2,"0")}</span>:
          <span >{(Math.floor((time%6000)/100)+"").padStart(2,"0")}</span>:
          <span >{(time%100+"").padStart(2,"0")}</span>
          {/* <span className="header__group-two">{seconds}</span> */}
        </Paper>{" "}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={toggle}
      >
        Start
      </Button>
      <span> | </span>
      <Button variant="contained" color="secondary" onClick={reset}>
        Stop
      </Button>
      
    </div>
  );
}
