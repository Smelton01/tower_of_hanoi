// TODO select difficulty / input name / view high scores
import React from 'react'
import { Grid, Paper } from '@material-ui/core'

export default function Home() {

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
        <Grid item xs={4} >
          <Paper className={classes.paper} >
            Home Page
          </Paper>
        </Grid>
        </Grid>
    </div>
    )
}
