import React from 'react';
import IndexPage from './IndexPage';
import AppPage from './pages/AppPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
class Routerkun extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={IndexPage} />
                    <Route path={"/Apps.html"} component={AppPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Routerkun;