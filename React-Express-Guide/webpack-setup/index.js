import React, { Component } from 'react';
import ReactDOM from 'react-dom'
// import { render } from 'react-dom';

import ClassExample from './ClassExample';

const styles = {
    app: {
        paddingTop: 40,
        textAlign: 'center'
    },
}

class App extends Component {
    render() {
        return (
            <div style={styles.app}>
                Welcome to React!
                <ClassExample color={'skyblue'}/>
                <ClassExample color={'steelblue'}/>
            </div>
        )
    }
}

const root = document.querySelector('#app');

ReactDOM.render(<App />, root)

// const node = document.querySelector('#app')
// const element = <div>
//     Hello World!
//     <ClassExample color={'skyblue'}/>
//     <ClassExample color={'steelblue'}/>
// </div>

// render(element, node)