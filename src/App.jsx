import { BrowserRouter as Router,Route } from "react-router-dom";
import React from 'react';
import IndexPage from './IndexPage';
class App extends React.Component {
  render() {
    return (
      <Route>
          <Route exact path="/" component={IndexPage} />
      </Route>
    );
  }
}
export default App;