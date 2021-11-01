import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dateFormat from "dateformat";

export default function Home(props) {
  const [highScores, setHighScores] = useState("");

  const postData = () => {
    console.log("Posting...");
    const { name, time, date } = props.user;

    fetch(new URL("/api" + name + "/" + date + time), {
      method: "post",
      headers: { "Content-Type": "application/json", mode: "no-cors" },
      body: {
        name: name,
        date: date,
        time: time,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  const getData = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setHighScores(data.sort((a, b) => a.time - b.time));
      });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      margin: "auto",
      maxHeight: 500,
    },
  }));

  const classes = useStyles();

  const List = (item) => {
    console.log(item.name);
    console.log(item.time);
    return (
      <li style={listStyle}>
        {item.name} ||{" "}
        {Math.floor(item.time / 100) + "." + (item.time % 100) + " s"} ||{"  "}
        {dateFormat(item.date, "mmmm dS, yyyy, h:MM:ss TT")}
      </li>
    );
  };
  const listStyle = {
    background: "#eee",
    padding: "5px",
  };

  const gridStyle = {
    minHeight: 400,
    margin: "auto",
  };
  return (
    <div style={gridStyle}>
      <Grid container spacing={3} style={gridStyle}>
        <Grid item xs={8} style={gridStyle}>
          <Paper className={classes.paper}>
            <p>Leaderboard</p> ================================= <br></br>
            <button onClick={() => postData()}>Post</button>
            <button onClick={() => getData()}>Get</button>
            <ol>
              {Object.entries(highScores).map((k) => List(k[1]))}
            </ol>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
