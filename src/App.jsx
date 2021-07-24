import { BrowserRouter as Router,Route } from "react-router-dom";
import React from 'react';
import IndexPage from './IndexPage';
import AppPage from "./pages/AppPage";
const homeUrl = process.env.PUBLIC_URL;
class App extends React.Component {
  render() {
    return (
      <Router>
          <Route exact path={ homeUrl + "/"} component={IndexPage} />
          <Route path={homeUrl + "/Apps"} component={AppPage} />
      </Router>
    );
  }
}
export default App;