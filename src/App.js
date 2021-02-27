import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import SigninPage from './pages/signin';
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route to='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
