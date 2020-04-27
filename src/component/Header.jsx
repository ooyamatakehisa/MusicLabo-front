import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Link } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import css from '../css/kanaFont.module.css';

const useStyles = makeStyles((theme) => ({

    menuButton: {
        marginRight: theme.spacing(4),
    },
    title: {
        paddingLeft: "10vw",
        paddingRight: "35px",

    },
    customizeToolbar: {
        minHeight: "75px"
    }
}));

export default function Header() {

    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <AppBar position="fixed" style={{ backgroundColor: "white", color: "black", opacity: "75%", boxShadow: "none" }}>
            <Toolbar className={classes.customizeToolbar} style={{ paddingLeft:"0px"}}>
                <div style={{ flexGrow: "1" }}>
                    <span className={css.titleFont + " " + classes.title}>
                        {process.env.REACT_APP_APP_NAME}
                    </span>
                    <Link href="#" onClick={preventDefault} color="inherit" style={{paddingRight:"20px"}}>Login</Link>
                    <Link href="#" onClick={preventDefault} color="inherit" style={{paddingRight:"20px"}}>About</Link>
                    <Link href="#" onClick={preventDefault} color="inherit">Contact</Link>
                </div>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon styles={{ width: "60", height: "60" }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}

