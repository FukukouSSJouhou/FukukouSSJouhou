import { BrowserRouter as Router,Route } from "react-router-dom";
import React from 'react';
import IndexPage from './IndexPage';
import AppPage from "./pages/AppPage";
import Routerkun from "./Routerkun"
const homeUrl = process.env.PUBLIC_URL;
class App extends React.Component {
  render() {
    return (
      <Routerkun />
    );
  }
}
export default App;