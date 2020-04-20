import React, { Component } from 'react';
import { Box, Typography } from '@material-ui/core/';

const styles = {
    footer: {
        maxWidth: "100%",
        height: "200px",
        textAlign: "center",
    },
    layout: {
        margin: "50px"
    }
}
const today = new Date();

export default function Footer(prop) {
    return (
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={6} style={styles.footer}>
            <div >
                <Typography >
                    aaaa
                </Typography>
                Copyright © 2020{today.getFullYear() > 2020 && "-" + today.getFullYear()} {process.env.REACT_APP_APP_NAME} 

            </div>
        </Box>
    )
}