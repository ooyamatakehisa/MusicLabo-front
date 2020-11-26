import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core/';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { TopPane, SeparationPane, CopyPane, ArrangePane, Brank } from 'component/Top'

import Separation1 from './Separation/Separation1.jsx'
// import Separation2 from './Separation/Separation2.jsx'
// import Separation3 from './Separation/Separation3.jsx'
import Copy from './Copy.jsx'

import '../css/index.css';


export default function (props) {

    return (
        <Fragment>
            <CssBaseline />
            <Header />
            <Router>
                <Switch>
                    <Route path="/separation/1">
                        <Separation1 />
                    </Route>
                    {/* <Route path="/separation/1">
                        <Separation2 />
                    </Route>
                    <Route path="/separation/1">
                        <Separation3 />
                    </Route> */}
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

