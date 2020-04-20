import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotificationsIcon from '@material-ui/icons/Notifications';
import css from './kanaFont.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
        paddingLeft: "116px"

    },
    customizeToolbar: {
        minHeight: "75px"
    }
}));

export default function App() {

    const classes = useStyles();
    

    return (
        <div className={classes.root} >
            <AppBar position="fixed"  style={{backgroundColor:"white", color:"black", opacity:"75%", boxShadow: "none"}}>
                <Toolbar className={classes.customizeToolbar}>
                    
                    <Typography variant="h5" className={classes.title}>
                        <span className={css.titleFont}>
                            {process.env.REACT_APP_APP_NAME}.
                        </span>
                    </Typography>
                    
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon styles={{width: "60",height: "60"}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )

}

