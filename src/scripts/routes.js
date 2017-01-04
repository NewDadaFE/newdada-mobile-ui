import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Layout from './layout';
import CounterView from './views/CounterView';
import ButtonView from './views/ButtonView';


// 路由配置
export default (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="index" component={CounterView} />
            <Route path="button" component={ButtonView} />
            <IndexRoute component={CounterView} />
        </Route>
    </Router>
);
