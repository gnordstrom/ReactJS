import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Picker from './components/Picker.js';

class App extends Component {
  // I could bind this way too
  // constructor(props) {
    // super(props);   
  //   this.state = {
  //     counter: 0
  //   }
  //   this.increment = this.increment.bind(this)
  // }
  // state = {
  //   counter: 0

  // }

  // componentDidMount() {
  //   setInterval(this.increment.bind(this), 1000)
  //   // The above line will create a new state every second, updating the displayed counter like a clock.
  // }

  // increment() {
  //   this.setState({counter: this.state.counter + 1})
  // }
  state = {
    data: [],
    dataTypeOptions: [
      {
        url: 'http://swapi.co/api/people/',
        label: 'People',
      }, {
        url: 'http://swapi.co/api/planets',
        label: 'Planets',
      }
    ],
    dataTypeSelected: 0,
  }

  componentDidMount() {
    // .call will immediately invoke
    this.fetchData.call(this)
  }
  
  fetchData() {
    // return axios.get(this.state.dataTypeOptions[this.state.dataTypeSelected].url);           This one line is the same as below
    const dataTypeIndex = this.state.dataTypeSelected;
    const dataType = this.state.dataTypeOptions[dataTypeIndex];
    axios.get(dataType.url).then(response => {
      console.log(response)
      this.setState({
        data: response.data.results
      });
    });
  }
  changeType(index) {
    this.setState({
      dataTypeSelected: index
    })
  }

  render() { // Called when state changes (newState), when props change, when initialized
      // console.log(this.state.data)
    return (
      <div className="App">
        {/*<div>
          {this.state.counter}
        </div>*/}
        {/*<button className="btn btn-success" onClick={this.increment.bind(this)}>Increase Strength!</button>*/}

        <Picker options={this.state.dataTypeOptions} typeChange={this.changeType.bind(this)} selected={this.state.dataTypeSelected} />
      </div>
    );
  }
}

export default App;
