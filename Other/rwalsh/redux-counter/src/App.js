import React, { Component, PropTypes } from "react";

import { connect } from 'react-redux';

import { increment, decrement, undo, redo } from './ducks/counter';
 
import "./App.css";

export class App extends Component {
	render() {
		console.log(this.props);
		const {
			count
			, decrement
			, futureValues
			, increment
			, previousValues
			, redo
			, title
			, undo
		} = this.props;
		return (
			<div className="app">
				<section className="counter">
					<h2>Hey, {title}!</h2>
					<h1 className="counter__current-value">{ count }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button increment-one"
							onClick={ () => increment(1) }
						>
							+1
						</button>
						<button
							className="counter__button increment-five"
							onClick={ () => increment(5) }
						>
							+5
						</button>
						<button
							className="counter__button decrement-one"
							onClick={ () => decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button decrement-five"
							onClick={ () => decrement(5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ previousValues.length === 0 }
							onClick={ undo }
						>
							Undo
						</button>
						<button
							className="counter__button redo"
							disabled={ futureValues.length === 0 }
							onClick={ redo }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}

App.propTypes = {
	  count: PropTypes.number.isRequired
	, decrement: PropTypes.func.isRequired
	, increment: PropTypes.func.isRequired
	, futureValues: PropTypes.arrayOf( PropTypes.number).isRequired
	, previousValues: PropTypes.arrayOf( PropTypes.number).isRequired
	, redo: PropTypes.func.isRequired
	, undo: PropTypes.func.isRequired 
}

// export default App;

function mapStateToProps( state ) {
	return state;
	// return { test: state.test, foo: state.foo} 			// How to import just specific pieces of state, can be customized however I want it
}

const decorator = connect( mapStateToProps, { increment, decrement, undo, redo } );
const decoratedComponent = decorator( App );

export default decoratedComponent;

// export default connect( mapToStateProps )( App );		// This is what the above three things do. 