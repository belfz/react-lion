jest.dontMock('../Example');
const Example = require('../Example');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Example', () => {
	let node, example, count;
	
	beforeEach(() => {
		count = 0;
		node = document.createElement('div');
		example = ReactDOM.render(
			<Example count={count} />, node
		);
	});
	
	it('renders an example with initial value of 0', () => {
		let renderedCount = TestUtils.scryRenderedDOMComponentsWithTag(example, 'span')[1];
		expect(renderedCount.textContent).toEqual('0');
	});
	
	it('does not update the view (with render) when the count is updated to odd value', () => {
		example = ReactDOM.render(
			<Example count={1} />, node
		);
		let renderedCount = TestUtils.scryRenderedDOMComponentsWithTag(example, 'span')[1];
		expect(renderedCount.textContent).toEqual('0');
	});
	
	it('updates the view (with render) when the count is updated to even value', () => {
		example = ReactDOM.render(
			<Example count={2} />, node
		);
		let renderedCount = TestUtils.scryRenderedDOMComponentsWithTag(example, 'span')[1];
		expect(renderedCount.textContent).toEqual('2');
	});
});
