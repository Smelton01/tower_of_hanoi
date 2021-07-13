import React, { useState, useEffect } from "react";
import Pole from "./Pole";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Game(props) {
  const [state, setState] = useState({ 0: [], 1: [], 2: [10, 14, 18] });
  const [dragging, setDragging] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (state[0].length === 0 || state[1].length === 1) {
      props.gameEnd(!props.end);
    }
  }, [props, state]);

  const init = { ...state };

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
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper} onClick={() => handleClick(0)}>
            <Pole discs={state[0]} pole={0} current={current === 0} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} onClick={() => handleClick(1)}>
            <Pole discs={state[1]} pole={1} current={current === 1} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} onClick={() => handleClick(2)}>
            <Pole discs={state[2]} pole={2} current={current === 2} />
          </Paper>
        </Grid>
      </Grid>
      <button onClick={() => setState(init)}>Reset</button>
    </div>

    // <div>
    //   {/* {Object.keys(state).map((s) => game(state[s]))} */}
    //   <span>
    //     <Pole discs={state[2]} />
    //   </span>
    //   <span>
    //     <Pole discs={state[3]} />
    //   </span>
    //   {/* <Pole discs={state[3]} /> */}
    // </div>
  );
}
