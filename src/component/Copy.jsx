import React, { Component } from 'react';
import { Box, Grid, Button } from '@material-ui/core/';
import ScrollToTop from './ScrollToTop.jsx';
import css from '../css/kanaFont.module.css';

const vhPerPx = (100/ document.documentElement.clientHeight)
const heightOfFooter = 11 * document.documentElement.clientWidth / document.documentElement.clientHeight
let heightOfCopy = 100  - heightOfFooter;

heightOfCopy += "vh";

const style = {

    secondPage: {
        height: heightOfCopy,
        backgroundColor: "#DED3D341",
        textAlign: "left"
    }
}

export default function Copy() {
    return (
        <div style={style.secondPage} id="here">
            <ScrollToTop />
            <Box align="center" p={20}>
                This page is being prepared.
            </Box>
        </div>
    )

}

