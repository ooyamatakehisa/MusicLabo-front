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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
    },
    customizeToolbar: {
        minHeight: "7vh"
    }
}));

export default function App() {

    const classes = useStyles();
    const openGitHub = useCallback(
        () => {
            window.open('https://github.com/ooyamatakehisa/MusicLabo-front')
        },
        [], // Tells React to memoize regardless of arguments.
      ); 

    return (
        <div className={classes.root} >
            <AppBar position="static" color="secondary">
                <Toolbar className={classes.customizeToolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Music Labo
                    </Typography>
                    <IconButton className={classes.menuButton} aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="primary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Tooltip title="GitHub Repository">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openGitHub}>
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}

