import React from 'react';
import CounterActions from '../actions/CounterActions';

class Counter extends React.Component {
	constructor (props) {
		super(props);
		this.props = props;
		this.increment = this.increment.bind(this);
	}
	
	increment () {
		CounterActions.incrementBy(1);
	}
	
	render () {
		return (
			<div>
				<span>{this.props.count}</span>
				<button onClick={this.increment}>increment</button>
			</div>
		);
	}
}

export default Counter;