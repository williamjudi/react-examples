/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

function logEvent(value) {
  var events = document.getElementById('events');
  var newEvent = document.createTextNode(value);
  var item = document.createElement('li');
  item.appendChild(newEvent);
  events.appendChild(item);
}

var Hello = React.createClass({
  displayName: 'Hello',
  render: function () {
    logEvent('render() - props: ' + JSON.stringify(this.props) + ' state: ' + JSON.stringify(this.state));
    return React.createElement('h1', null, 'Hello ', this.props.name, '! ', this.state.count, ' time');
  },

  // Mounting
  getDefaultProps: function () {
    var result = null;
    logEvent('getDefaultProps(): ' + JSON.stringify(result));
    return result;
  },
  getInitialState: function () {
    var result = { count: 1 };
    logEvent('getInitialState(): ' + JSON.stringify(result));
    return result;
  },
  componentWillMount: function () {
    logEvent('componentWillMount()');
  },
  componentDidMount: function () {
    logEvent('componentDidMount()');
  },

  // Updating
  componentWillReceiveProps: function (nextProps) {
    logEvent('componentWillReceiveProps(nextProps: ' + JSON.stringify(nextProps) + ')');
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    logEvent('shouldComponentUpdate(nextProps: ' + JSON.stringify(nextProps) + ', nextState: ' + JSON.stringify(nextState) + '): boolean');
    return true;
  },
  componentWillUpdate: function (nextProps, nextState) {
    logEvent('componentWillUpdate(nextProps: ' + JSON.stringify(nextProps) + ', nextState: ' + JSON.stringify(nextState) + ')');
  },
  componentDidUpdate: function (prevProps, prevState) {
    logEvent('componentDidUpdate(prevProps: ' + JSON.stringify(prevProps) + ', prevState: ' + JSON.stringify(prevState) + ')');
    if (prevProps.name === 'Number One') {
      logEvent('-- new state --');
      this.setState({ count: this.state.count + 1 });
    }
  },

  // Unmounting
  componentWillUnmount: function () {
    logEvent('componentWillUnmount()');
  }
});

var App = React.createClass({
  displayName: 'App',
  getInitialState: function () {
    return {
      name: 'Number One'
    }
  },
  componentDidMount: function () {
    logEvent('-- new prop --');
    this.setState({ name: 'Number Two' });
  },
  render: function () {
    return React.createElement(Hello, { name: this.state.name });
  }
});

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);

ReactDOM.unmountComponentAtNode(
  document.getElementById('app')
);
