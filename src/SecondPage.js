import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import css from './kanaFont.module.css';


const style = {

    secondPage: {
        height: "100vh",
        backgroundColor: "#f3f3f3",
        textAlign: "center"
    }
}


export default function SecondPage() {

    return (
        <div style={style.secondPage} id="here">
            <Box mx={40} p={20} letterSpacing={20}>
                <Box mb={8}>
                    <Typography variant="h3" m={60}>
                        <span className={css.font}>
                            SHOW MORE
                        </span>
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item xs={6}>
                        <img src={'/deeplearning.jpeg'} alt="Logo" width="300px" height="250px" />
                        <img src={'/svm.png'} alt="Logo" width="300px" height="250px" style={{margin:"10px",backgroundColor:"white"}}/>
                    </Grid>
                    <Grid item xs={6}>
                        aaaa
                    </Grid>
                </Grid>

            </Box>
        </div>
    )

}

