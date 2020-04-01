import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

const style = {
    
    secondPage: {
        height: "100vh"
    }
}


export default function SecondPage() {
    const classes = useStyles();

    return (
        <Box style={style.secondPage} bgcolor="secondary.main">
            
            <div>aaaa</div>
        </Box>
    )

}

