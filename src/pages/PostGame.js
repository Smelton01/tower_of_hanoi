// TODO view own standing and high scores
// TODO select difficulty / input name / view high scores
import React, {useState, useEffect} from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

export default function Home() {
    const [state, setState] = useState("init")

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
            {state}
          </Paper>
        </Grid>
        </Grid>
    </div>
    )
}