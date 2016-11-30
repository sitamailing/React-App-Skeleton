import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from '../Layout/Layout';
import Journey from '../Journey/Journey';
import Stability from '../Journey/Stability/Stability';
import Development from '../Journey/Development/Development';
import Growth from '../Journey/Growth/Growth';
import Home from '../Home/Home';

export default (
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home}/>
            <Route path='home' component={Home}/>
            <Route path='journey' to='/journey/stability' component={Journey}/>
            <Route to='/journey/stability' component={Journey}>
                <Route path='/journey/stability' component={Stability}/>
                <Route path='/journey/development' component={Development}/>
                <Route path='/journey/growth' component={Growth}/>
            </Route>
        </Route>
    </Router>
);


