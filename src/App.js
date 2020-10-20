import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { appRoutes } from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {appRoutes.map(route => <Route {...route} />)}
      </Switch>
    </Router>
  )
}

export default App;
