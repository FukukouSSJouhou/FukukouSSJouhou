import React from 'react';
import IndexPage from './IndexPage';
import AppPage from './pages/AppPage';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
class Routerkun extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path={"/"} component={IndexPage} />
                <Route exact path={"/index.html"} component={IndexPage} />
                <Route path={"/Apps.html"} component={AppPage} />
            </Router>
        );
    }
}
export default Routerkun;