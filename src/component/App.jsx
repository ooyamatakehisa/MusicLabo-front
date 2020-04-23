import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { TopPane, SeparationPane, CopyPane, ArrangePane, Brank } from 'component/Top'

import Separation from './Separation.jsx'
import Copy from './Copy.jsx'

import '../css/index.css';


export default function (props) {

    return (
        <Fragment>
            <Header />
            <Router>
                <Switch>
                    <Route path="/separation">
                        <Separation />
                    </Route>
                    <Route path="/copy">
                        <Copy />
                    </Route>
                    <Route path="/arrange">
                        <Copy />
                    </Route>
                    <Route path="/">
                        <TopPane />
                        <SeparationPane />
                        <CopyPane />
                        <ArrangePane />
                        <Brank />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </Fragment>

    )

}

