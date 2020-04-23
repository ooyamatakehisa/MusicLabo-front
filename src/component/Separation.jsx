import React, { Component } from 'react';
import { Box, Grid, Button } from '@material-ui/core/';
import css from '../css/kanaFont.module.css';
import ScrollToTop from './ScrollToTop.jsx';


const style = {

    secondPage: {
        height: "32vw",
        backgroundColor: "#DED3D341",
        textAlign: "left"
    }
}

export default function Separation() {
    return (
        <div style={style.secondPage} id="here">
            <ScrollToTop />
            aaaa
        </div>
    )

}

