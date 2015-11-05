jest.dontMock('../AppRoot');
const AppRoot = require('../AppRoot');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import config from '../../../../config/app';
import Counter from '../Counter';
import CounterStore from '../../stores/CounterStore';

var state = {
  count: 1
};

describe('AppRoot', () => {
  
  var mockCount = 0;
  
  beforeEach(function () {
    CounterStore.getCount.mockReturnValue(mockCount);
  });

  it('renders properly', () => {
    var appRoot = TestUtils.renderIntoDocument(
      <AppRoot />
    );

    var title = TestUtils.findRenderedDOMComponentWithTag(appRoot, 'h1');
    var counters = TestUtils.scryRenderedComponentsWithType(appRoot, Counter);

    expect(title.textContent).toEqual('This title comes from config.');
    expect(counters.length).toBe(1);
    expect(counters[0].props).toEqual({
      count: mockCount
    });
  });
});
