import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Counter from './Counter';
import CounterStore from '../stores/CounterStore';

import Example from './Example';

import config from '../../../config/app';

function getState () {
  return {
    count: CounterStore.getCount()
  };
}

class AppRoot extends React.Component {
  
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

  /*
   * AppRootly PureRenderMixin
   * In React 0.13 there is no way to attach mixins to ES6 classes
   * this is a workaround to solve this
   * http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins
   */
  shouldComponentUpdate () {
    return PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }
  
  render () {
    return (<div className="appRoot">
      <h1>{config.title}</h1>
      <Counter count={this.state.count} />
      <Example count={this.state.count} />
    </div>);
  }
  
  _onChange () {
    this.setState(getState());
  }
}

export default AppRoot;
