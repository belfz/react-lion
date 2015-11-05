jest.dontMock('../CounterStore');
jest.dontMock('purrsub');

describe('CounterStore', function () {
	var AppDispatcher, CounterStore, ActionConstants, callback;
	
	var actionIncrement = {
		action: {
			actionType: 'COUNTER_UPDATE',
			count: 1	
		}
	};
	
	beforeEach(function () {
		AppDispatcher = require('../../dispatcher/AppDispatcher');
		CounterStore = require('../CounterStore');
		ActionConstants = require('../../constants/ActionConstants');
		callback = AppDispatcher.register.mock.calls[0][0];
	});
	
	it('registers a callback with the dispatcher', function () {
		expect(AppDispatcher.register.mock.calls.length).toBe(1);
	});
	
	it('initializes the store with count equal to 0', function () {
		var initialCount = CounterStore.getCount();
		expect(initialCount).toBe(0);
	});
	
	it('increments the count by 1', function () {
		callback(actionIncrement);
		var count = CounterStore.getCount();
		expect(count).toBe(1);
	});
});
