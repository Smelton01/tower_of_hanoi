import React, { useState, useEffect } from "react";
import Pole from "./Pole";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const level = {
  3:[4,8,12],
  4:[3,6,9,12],
  5:[1,3,6,9,12],
  6: [2,4,6,8,10,12],
  8:[4,5,6,7,8,9,10,12],
  10: [3,4,5,6,7,8,9,10,11,12],
  12: [1,2,3,4,5,6,7,8,9,10,11,12]
}

export default function Game(props) {
  const [state, setState] = useState({ 0: level[props.difficulty], 1: [], 2: [] });
  const [dragging, setDragging] = useState(false);
  const [current, setCurrent] = useState(null);
  const [running, setRunning] = useState(true);
  const {difficulty} = props

  useEffect(() =>{
    if(!props.running){
    setState({ 0: level[props.difficulty], 1: [], 2: [] })
    }
  },[difficulty])


  useEffect(() => {
    if (running && (state[2].length === 3 || state[1].length === 3)) {
      props.setEnd(!props.end);
      setRunning(false)
    }
  }, [props, state]);

  // const init = { ...state };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      margin: "auto",
      maxHeight: 500
    },
  }));

  const classes = useStyles();

  const handleClick = (index) => {
    if (!dragging) {
      setCurrent(index);
      setDragging(!dragging);
    } else {
      if (state[current].length === 0) {
        console.log("Cannot move from empty pole");
      } else if (state[current][0] > state[index][0]) {
        console.log("Cannot place big disk on top of small disk");
      } else {
        setState((state) => {
          let prevState = { ...state };
          prevState[index] = [prevState[current][0], ...prevState[index]];
          prevState[current] = prevState[current].slice(1);
          return prevState;
        });
      }
      setDragging(!dragging);
      setCurrent(null);
      // if (!props.end){
      //   console.log("HERE")
      // }
    }
  };

  const gridStyle = {
    minHeight:400,
    margin: "auto"
  }

  const innerGridStyle ={
    minHeight: "100%",
    background: "#5D6D7E"
    // margin: "auto"
  }
  

  return (
    <div className={classes.root}>
      <Grid container spacing={5} style={gridStyle}>
      <Grid item xs={1} >
      </Grid>
        <Grid item xs={3} >
          <Paper className={classes.paper} onClick={() => handleClick(0)} style={innerGridStyle}>
            <Pole discs={state[0]} pole={0} current={current === 0} />
          </Paper>
        </Grid>
        <Grid item xs={0.5} >
      </Grid>
        <Grid item xs={3} >
          <Paper className={classes.paper} onClick={() => handleClick(1)} style={innerGridStyle}>
            <Pole discs={state[1]} pole={1} current={current === 1} />
          </Paper>
        </Grid>
        <Grid item xs={0.5} >
      </Grid>
        <Grid item xs={3} >
          <Paper className={classes.paper} onClick={() => handleClick(2)} style={innerGridStyle}>
            <Pole discs={state[2]} pole={2} current={current === 2} />
          </Paper>
        </Grid>
        <Grid item xs={1} >
      </Grid>
      </Grid>
     
    </div>
  );
}
