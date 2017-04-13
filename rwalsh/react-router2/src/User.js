import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import users from './users.json';


function Age (props) {
    const user = users[props.match.params.name]
    return <h2>{user.age}</h2>
}

function Hair (props) {
    const user = users[props.match.params.name]
    return <h2>{user.hair}</h2>
}

class User extends Component {
    render() {
        const name = this.props.match.params.name
        return (
            <Router>
                <div>
                    <h1>{name}'s page!</h1>
                    <ul>
                        <li><Link to={`/users/${name}/age`}>Age!</Link></li>
                        <li><Link to={`/users/${name}/hair`}>Hair!</Link></li>
                    </ul>

                    <Route path="/users/:name/age" component={Age} />
                    <Route path="/users/:name/hair" component={Hair} />
                </div>
            </Router>
        )
    }
}

export default User;