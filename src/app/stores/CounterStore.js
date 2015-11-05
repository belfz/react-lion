import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';
import PurrSub from 'purrsub';
var emitter = new PurrSub();


var _count = 0;

var CounterStore = {
	getCount: function () {
		return _count;
	},
	
	emitChange: function () {
		emitter.publish('change');
	},
	
	addChangeListener: function (callback) {
		emitter.subscribe('change', callback);
	},
	
	removeChangeListener: function (callback) {
		emitter.unsubscribe('change', callback);
	}
};

CounterStore.dispatchToken = AppDispatcher.register(function (payload) {
	var action = payload.action;
	switch (action.actionType) {
	  case ActionConstants.COUNTER_UPDATE:
		_count += action.count;
		break;
		
	  default:
		return true;
	}
	
	CounterStore.emitChange();
	return true;
});

export default CounterStore;