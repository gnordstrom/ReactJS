import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Home from './Home';
import About from './About';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users/:name" component={User}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
