import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

const styles = {
    index: {
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        textAlign: "center",
    },
    paper: {
        height: "100%",
    }
}

const functionList = [
    "Seperation",
    "Copy",
    "Contact",
    "About Me"
]

export default function IndexPage() {

    return (
        <Grid container style={styles.index} >
            {functionList.map((value) => (
                <Grid item xs={12 / functionList.length}>
                    <Paper elevation={0} variant="outlined" square style={styles.paper}>
                        <Typography>{value}</Typography>
                    </Paper>
                </Grid>
            ))}


        </Grid>
    )

}

