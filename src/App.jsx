import { BrowserRouter as Router,Route } from "react-router-dom";
import React from 'react';
import IndexPage from './IndexPage';
import AppPage from "./pages/AppPage";
class App extends React.Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={IndexPage} />
          <Route path="/Apps" component={AppPage} />
      </Router>
    );
  }
}
export default App;