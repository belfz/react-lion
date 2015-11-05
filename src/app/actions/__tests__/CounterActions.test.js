/**
 * ES6 'import' statements are always hoisted. This way, everything gets automocked
 * by Jest. If 'dontMock' needs to be used, use CommonJS call to 'require'.
 */
jest.dontMock('../CounterActions');
const CounterActions = require('../CounterActions');

/**
 * This will be autmocked.
 */
import AppDispatcher from '../../dispatcher/AppDispatcher';
import ActionConstants from '../../constants/ActionConstants';


describe('CounterActions', () => {
	it('should call AppDispatcher.handleAction method', () => {
		CounterActions.incrementBy(1);
		expect(AppDispatcher.handleAction.mock.calls.length).toBe(1);
		expect(AppDispatcher.handleAction.mock.calls[0][0]).toEqual({
			actionType: ActionConstants.COUNTER_UPDATE,
			count: 1
		});
	});
});