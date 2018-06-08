import React, { Component } from "react";
import "./App.css";
import LoginPage from "./pages/Login/Login"
import Arguments from "./pages/Arguments/Arguments"
import  {BrowserRouter as Router,Route,} from 'react-router-dom'
import {Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={LoginPage}/>
            <Route path='/user/arguments' component={Arguments}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
