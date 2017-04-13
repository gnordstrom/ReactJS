import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Home extends Component {
    state = {
        hasSubmitted: false,
        name: ""
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    routeToUser() {
        this.props.history.push(`/users/${this.state.name}`)
    }
    render() {
        return (
            <div>
                <h1>Home!</h1>
                <div>
                    <input value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <button onClick={this.routeToUser.bind(this)}>Go!</button>
                </div>
        </div> 
        )
    }
}

export default Home;

/*class Home extends Component {
    state = {
        hasSubmitted: false,
        name: ""
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    routeToUser() {
        this.setState({hasSubmitted: true})
    }
    render() {
        return this.state.hasSubmitted ? <Redirect to={{pathname: `/users/${this.state.name}` }} /> :
            <div>
                <h1>Home!</h1>
                <div>
                    <input value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <button onClick={this.routeToUser.bind(this)}>Go!</button>
                </div>
            </div>
    }
}

export default Home;*/

