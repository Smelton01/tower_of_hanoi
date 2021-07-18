// TODO view own standing and high scores
// TODO select difficulty / input name / view high scores
import React, {useState, useEffect} from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function Home(props) {
    const [state, setState] = useState("init")
    const [highScores, setHighScores] = useState("")

    const postData = () =>{
        const {name, time, date} = props.user

        fetch('http://localhost:5000/api?' + new URLSearchParams({
            name: name,
            date: date,
            time: time,
        }), {
            method: 'post',
            headers: {'Content-Type':'application/json', "mode": "no-cors"},
            body: {
                name: name,
                date: date,
                time: time,
            }}).then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const getData = () => {
        fetch('http://localhost:5000/api?')
        .then((res) => res.json())
        .then((data) => setHighScores(data))
    }

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

      const List = (item) => {
          console.log(item.name)
        return <li style={listStyle}>{item.name} : {item.time || 1} : {item.date || "1999"} </li>
      }
      const listStyle = {
          background: "#eee",
          padding: "5px"
      }
    return (
        <div>
        <Grid container spacing={3} >
        <Grid item xs={8} >
          <Paper className={classes.paper} >
            <p>High Scores</p> ==================
            {props.user.name}
            <button onClick={() => postData()}>Post</button>
            <button onClick={() => getData()}>Get</button>
          <ol >
        {/* <ListItem button primary="tets" /> */}
        {Object.entries(highScores).map((k) => List(k[1]))}
        </ol>
      </Paper>

        </Grid>
        </Grid>
    </div>
    )
}