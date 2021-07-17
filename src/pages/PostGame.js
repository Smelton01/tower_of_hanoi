// TODO view own standing and high scores
// TODO select difficulty / input name / view high scores
import React, {useState, useEffect} from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

export default function Home(props) {
    const [state, setState] = useState("init")

    const postData = () =>{
        const {name, time, date} = props.user
        
        fetch('http://localhost:5000/api', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                name: name,
                time: time,
                date: date
            }}).then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => {setState("gottem")
        console.log(state)})
        .catch((e) => console.error(e))
    },[])

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
    return (
        <div>
        <Grid container spacing={3} >
        <Grid item xs={8} >
          <Paper className={classes.paper} >
            <p>Home Page</p> ==================
            {props.user.name}
            <button onClick={() => postData()}>Post</button>
          </Paper>
        </Grid>
        </Grid>
    </div>
    )
}