jest.dontMock('../Counter');
const Counter = require('../Counter');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Counter', () => {
	let count = 0;
	
	it('renders a counter', () => {
		let counter = TestUtils.renderIntoDocument(
			<Counter count={count} />
		);
		
		let renderedCount = TestUtils.findRenderedDOMComponentWithTag(counter, 'span');
		expect(renderedCount.textContent).toEqual('0');
		
	});
});
