import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SiginPage from './pages/signin';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route to='/' component={Home} exact />
        <Route to='/signin' component={SiginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
