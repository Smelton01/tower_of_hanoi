import React, { useState, useEffect } from "react";
import Game from "../components/Game";
import Timer from "../components/Timer";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import PostGame from "./PostGame"

export default function MainGame() {
  const [end, setEnd] = useState(false);
  const [time, setTime] = useState(0);
  const [change, setChange] = useState("")
  const [difficulty, setDifficulty] = useState(3)
  const [running, setRunning] = useState(false)
  const [user, setUser] = useState({name:"Anon", time: 0, date: Date.now()})

  useEffect(() => {
    console.log("Ending")
  },[end])

  useEffect(() => {
    console.log(time)
    
  },[time])

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const formStyle={
    position: "absolute",
    bottom: 20
  }

  const submitTime = (e) => {
    e.preventDefault()
    const user = {
      name: change,
      time: time
    }
    setUser({name:change, time:time, date: Date.now()})
    console.log(user)
  }
  const handleChange = (e) => {
    setChange(e.target.value)
  }
  useEffect(()=>{
  console.log(difficulty)
  },[difficulty])

  const changeDifficulty = (e) => {
    setDifficulty(e.target.value)
  }

  return (
    <div>
      <Timer getTime={setTime} timeState={time} end={end} setRunning={setRunning} running={running}/>

      <FormControl className={classes.formControl}>
        <InputLabel id="difficulty-select">Difficulty</InputLabel>
        <Select
          labelId="difficulty-select-label"
          id="difficulty-select-label"
          value={difficulty}
          onChange={changeDifficulty}
        >
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
          <MenuItem value={5}>Five</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
          <MenuItem value={8}>Eight</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={12}>Twelve</MenuItem>
        </Select>
        <FormHelperText>Select the number of discs</FormHelperText>
      </FormControl>

      <Game setEnd={setEnd} end={end} difficulty={difficulty} running={running}/>
      {/* <button onClick={() => console.log(state)}>testing</button> */}
      <p></p>
      <span style={formStyle}> 
      <p>Your time: {time}</p>
      <form id="username" onSubmit={submitTime}> 
      <TextField  label="Username" variant="outlined" onChange={handleChange}/> 
      <Button type="submit" form="username">Submit</Button>
      </form> 
     
      </span>
    {/* <PostGame user={user}/> */}
  
    </div>
  );
}
