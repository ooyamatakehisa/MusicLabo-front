import React, { Component, Fragment } from 'react';
import Header from './Header.js'
import StartPage from './StartPage.js'
import SecondPage from './SecondPage.js'
import IndexPage from './IndexPage.js'

export default function(props) {

    return (
        <Fragment>
            <Header/>
            <StartPage/> 
            <SecondPage/> 
            <IndexPage/>
        </Fragment>

    )

}

