import React from 'react';

class Example extends React.Component {
	constructor (props) {
		super(props);
		this.props = props;
	}
	
	shouldComponentUpdate (nextProps) {
		if (nextProps.count % 2 === 0) {
			console.log('Yup, need to update now, so...');
			return true;
		} else {
			console.log('No need to update (nor to render)!');
			return false;
		}
	}
	
	render () {
		console.log('...rendering this time!');
		return (
			<div><span>thats an example - last rendered count is</span> <span>{this.props.count}</span></div>
		);
	}
}

export default Example;