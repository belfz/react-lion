import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';

const CounterActions = {
	incrementBy: function (count) {
		AppDispatcher.handleAction({
			actionType: ActionConstants.COUNTER_UPDATE,
			count: count
		});
	}
};

export default CounterActions;