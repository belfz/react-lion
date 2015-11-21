import React from 'react';
import Counter from './Counter';
import CounterStore from '../stores/CounterStore';
import Example from './Example';
import config from '../../../config/app';

function getState () {
  return {
    count: CounterStore.getCount()
  };
}

class Root extends React.Component {
  constructor (props) {
    super(props);
    this.state = getState();
    this._onChange = this._onChange.bind(this);
  }
  
  componentDidMount () {
    CounterStore.addChangeListener(this._onChange);
  }
  
  componentWillUnmount () {
    CounterStore.removeChangeListener(this._onChange);
  }
  
  render () {
    return (<div className="main">
      <h1>{config.title}</h1>
      <Counter count={this.state.count} />
      <Example count={this.state.count} />
    </div>);
  }
  
  _onChange () {
    this.setState(getState());
  }
}

export default Root;
