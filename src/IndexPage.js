import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import css from './kanaFont.module.css';

const styles = {
    index: {
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        textAlign: "left",
    },
    paper: {
        height:"100%",
        padding: "0px 8vh 0px 8vh",
        "&:hover": {
            color: "#ed1212",
            cursor: "pointer"
        },
        cursor: "pointer"
    },
    number: {
        paddingTop: "25vh",
        paddingBottom: "30vh",
        fontWeight: "bold"
    },

    functionExplanation: {
        padding: "1vh"
    }
}

const functionNameList = [
    "Seperation",
    "Copy",
    "Contact",
    "About Me"
];


const functionDescriptionList = {
    "Seperation":"Analyzes uploaded audio files and separates them into separate audio files for each instrument and outputs them.",
    "Copy":"Offers a variety of features to help you play and copy music",
    "Contact":"Feel free to contact me with any improvements or questions. Your voice will improve this site.",
    "About Me":"A profile of the creator of this site. You can also look at the portfolio.",
}

export default function IndexPage() {

    return (
        <Grid container style={styles.index} id="index">
            {functionNameList.map((value, index) => (
                <Grid item xs={12 / functionNameList.length}>
                    <Paper elevation={0} variant="outlined" square style={styles.paper}>
                        <Typography style={styles.number} variant="h2">{('00'+(index+1)).slice(-2)}</Typography>
                        <Typography variant="h5">
                            <div className={css.font}>{value}</div>
                        </Typography>
                        
                        <Typography >
                            <div className={css.font}>{functionDescriptionList[value]}</div>
                        </Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )

}

