import React from 'react';
import { Box, Grid, Link } from '@material-ui/core/';
import css from '../css/kanaFont.module.css';

const styles = {
    footer: {
        maxWidth: "100%",
        height: "11vw",
        textAlign: "left",
        background: "#B9B9B9 0% 0% no-repeat padding-box",
        color: "white"
    },
    layout: {
        margin: "50px"
    }
}
const today = new Date();

export default function Footer(prop) {
    return (
        <div style={styles.footer}>
            <Box style={{ paddingTop: "4vh" }}>
                <Grid container className={css.footerFont}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={2} align="center">{process.env.REACT_APP_APP_NAME}</Grid>
                    <Grid item xs={1}>
                        <Box pb={1}>
                            <Link color="inherit">Home</Link><br />
                        </Box>
                        <Box pb={1}>
                            <Link color="inherit">Separation</Link><br />
                        </Box>
                        <Box pb={1}>
                            <Link color="inherit">Copy</Link><br />
                        </Box>
                        <Box pb={1}>
                            <Link color="inherit">Arrange</Link><br />
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box pb={1}>
                            <Link color="inherit">Twitter</Link><br />
                        </Box>
                        <Box pb={1}>
                            <Link color="inherit">Instagram</Link><br />
                        </Box>
                        <Box pb={1}>
                            <Link color="inherit">Github</Link><br />
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Box pb={1}>
                            <Link color="inherit">About</Link><br />
                        </Box>
                        <Box pb={1}>
                            <Link color="inherit">Contact</Link><br />
                        </Box>
                        <Box pb={1}>
                            <Link color="inherit">Support</Link><br />
                        </Box>
                    </Grid>
                    <Grid item xs={5} align="center">
                        Copyright © 2020{today.getFullYear() > 2020 && "-" + today.getFullYear()} {process.env.REACT_APP_APP_NAME}
                        
                    </Grid>
                   

                </Grid>
            </Box>
        </div>
    )
}