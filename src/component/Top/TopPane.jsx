import React, { useCallback } from 'react';
import { Box, Grid, Tooltip, IconButton } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import css from 'css/kanaFont.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const styles = {
    startPage: {
        maxWidth: "100%",
        height: "100vh",
        textAlign: "left",
        backgroundColor:"white",
        backgroundSize: "cover",
    },
    
    button: {
        margin: "1vh",
        padding: "1vh"
    },
    refButton: {
        marginTop: "4vh",
        padding: "1vh",
        overflow: 'hidden',
        // display:'inline-block'
    },
    link1: {
        textDecoration: "none",
        color: "#f50057"
    },
    link2: {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.5)"
    }
}
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(4),
    }
}));



export default function Top() {
    const classes = useStyles();
    const openGitHub = useCallback(
        () => {
            window.open('https://github.com/ooyamatakehisa/MusicLabo-front')
        },
        [], 
    );
    const openTwitter = useCallback(
        () => {
            window.open('https://twitter.com/elle4461')
        },
        [], 
    );
    const openInstagram = useCallback(
        () => {
            window.open('https://www.instagram.com/takehisa2525/')
        },
        [], 
    );
    
    return (
        <Box style={styles.startPage} >
            <Grid container>
                <Grid item xs={6} >
                    <Box mt={10} className={css.subTitle} style={{ paddingLeft: "10vw", width: "75%" }}>
                        This site helps performers to improve their skills by analyzing music files using the methods used in the latest papers.
                        Specifically, we can use RNN (recurrent neural network), which is the most popular method recently,
                        to separate the sound sources, analyze the chords, and change the playback speed.
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box mt={8} style={{ textAlign: "right", marginRight: "24px", height: "100%" }}>
                        <Tooltip title="GitHub Repository">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openGitHub}>
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <br />
                        <Tooltip title="Twitter Acount">
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openTwitter}>
                                <TwitterIcon />
                            </IconButton>
                        </Tooltip>
                        <br />
                        <Tooltip title="Instagram Acount">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={openInstagram}>
                            <InstagramIcon />
                        </IconButton>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
            <Box style={{ textAlign: "center" }}>
                <div style={{ position: "absolute", bottom: "-42px", left: "50%" }} className={css.scroll}>
                    scroll
                </div>
            </Box>
        </Box>
    )

}

// useEffect(() => {
    //     const anchor = document.createElement("a");
    //     anchor.setAttribute("class", "twitter-follow-button");
    //     anchor.setAttribute("href", "https://twitter.com/elle4461");
    //     anchor.setAttribute("data-size", "large");
    //     anchor.setAttribute("data-show-screen-name", "false");
    //     document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    //     const script = document.createElement("script");
    //     script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    //     document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    // }, []);

// <Typography variant="h2">
//     <Box letterSpacing={25} >
//         <div className={css.title}>{process.env.REACT_APP_APP_NAME}</div>
//     </Box>
// </Typography>
//     <Typography style={styles.subtitle} variant="h6">
//         <Box letterSpacing={5}>
//             <div className={css.font}>present confortable music support station using latest research</div>
//         </Box>
//     </Typography>
//     <Button variant="outlined" color="secondary" style={styles.button}>
//         <MemoryRouter>
//             <HashLink to="./IndexPage#index" smooth style={styles.link1}>
//                 GET STARTED
//                         </HashLink>
//         </MemoryRouter>
//     </Button>
//     <Button variant="outlined" style={styles.button}>
//         <MemoryRouter>
//             <HashLink to="./SecondPage#here" smooth style={styles.link2}>
//                 SHOW MORE
//                         </HashLink>
//         </MemoryRouter>
//     </Button>
//     <div style={styles.refButton}>
//         <GitHubButton href="https://github.com/ooyamatakehisa/MusicLabo-front" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ooyamatakehisa/MusicLabo-front on GitHub" style={{ display: 'inline' }}>Star</GitHubButton>
//         <span className="twitter-embed" style={{ marginLeft: "15px" }}></span>
//     </div>
