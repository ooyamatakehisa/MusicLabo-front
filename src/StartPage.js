import React, { Component } from 'react';
import { Box,  Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

const styles = {
    startPage: {
        maxWidth: "100%",
        height: "93vh",
        textAlign: "center",
    },

    title: {
        paddingTop: "30vh",
        verticalAlign: "middle"
    },
    subtitle: {
        padding: "10vh",
        verticalAlign: "middle"
    },
    button: {
        margin:"1vh",
        padding:"1vh"
    }
}
export default function StartPage() {

    return (
        <Box style={styles.startPage} >
            <Typography style={styles.title} variant="h2">
                <Box letterSpacing={25}>
                    Music Labo
                </Box>
            </Typography>
            <Typography style={styles.subtitle}>
                <Box letterSpacing={9}>present confortable music support station using latest research</Box>
            </Typography>
            <Button variant="outlined" color="secondary" style={styles.button}>
                GET STARTED 
            </Button>
            <Button variant="outlined" style={styles.button}>SHOW MORE</Button>
        </Box>
    )

}

