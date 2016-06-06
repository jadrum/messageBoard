var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
    
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');


/* app */

var MessageMaker = React.createClass({
  render: function() {
    return (
      <div className="lets-talk">
      
        <Input />
        <Board />
      </div>
    )
  }
});

/* Message Input */
var Input = React.createClass({
  render: function() {  
    return (
      <form className="input">
        <h2>Please leave A message</h2>
        <input type="text" ref="author" required />
        <input type="text" ref="message" required />
        <input type="Submit" />
      </form>
    )
  }
});

/* Message board */

var Board = React.createClass({
  render: function() {
    return (
      <p>Message Board</p>
    )
  }
});

ReactDOM.render(<MessageMaker/>, document.querySelector('#main'));
