import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/Home';
import EmpCreateAccount from './components/pages/EmpCreateAccount';
import DevCreateAccount from './components/pages/DevCreateAccount';
import DevSimple from './components/DevSimple';
import JobSimple from './components/JobSimple';
import Profile from "./components/pages/Profile"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/dev-create-account" component={DevCreateAccount} />
        <Route exact path="/emp-create-account" component={EmpCreateAccount} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;
