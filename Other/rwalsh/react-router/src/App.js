import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class HowManyTensHavePassed extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.tens === nextProps.tens) return false;
    else return true;
  }
  render() {
    console.log("TOP")
    return <div> {this.props.tens} tens of seconds have passed! </div>
  }
}

class App extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    setInterval(() => this.setState({counter: this.state.counter +1}), 1000);
  }
  render() {
    console.log("BOTTOM")
    return (
      <div className="App">
        counter: {this.state.counter}
        <HowManyTensHavePassed tens={Math.floor(this.state.counter / 10)}/>
      </div>
    );
  }
}

export default App;
