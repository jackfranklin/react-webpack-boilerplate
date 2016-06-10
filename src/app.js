var React = require('react');
var ReactDOM = require('react-dom');
var Name = require('./name');

var App = React.createClass({
  render: function() {
    return <Name />;
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
