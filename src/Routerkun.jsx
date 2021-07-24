import React from 'react';
import IndexPage from './IndexPage';
import AppPage from './pages/AppPage';
import Page404 from "./pages/Page404";
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom';
class Routerkun extends React.Component{
    render(){
        return(
            <BrowserRouter >
                <Switch>
                    <Route exact path={"/"} component={IndexPage} />
                    <Route path={"/Apps.html"} component={AppPage} />
                    <Route path={"/404.html"} component={Page404} />
                    <Route component={Page404} />
                </Switch>
            </BrowserRouter >
        );
    }
}
export default Routerkun;