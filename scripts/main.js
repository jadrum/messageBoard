var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
    
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');


/* app */

var MessageMaker = React.createClass({
  getInitialState: function() {
    return {
      messages : {}
    }
  },
  addMessage: function(message) {
    var time = (new Date()).getTime();
    this.state.messages['message-' + time] = message;
    this.setState({messages: this.state.messages});
  
  },
  loadSamples : function() {
    this.setState({
      messages : require('./sample-messages')
    });
  },

  renderMessage : function(key) {
    return <Message key={key} index={key} details={this.state.messages[key]}/> 
  },

  render: function() {
    return (
      <div className="lets-talk">
      
        <div className="board">
          <h1>Message Board</h1>
          <ul className="message-list">
            {Object.keys(this.state.messages).map(this.renderMessage)}
          </ul>
          <Input addMessage={this.addMessage} loadSamples={this.loadSamples}/>
        </div>

      </div>
    )
  }
});

/* 
  The message itself
  <Message />
*/
var Message = React.createClass({
  render: function() {
    var details=this.props.details;
    return (
      <li className="msg-list">
        <p>{details.author}: {details.comment}</p>        
     </li>
    )
  }
});


/* Message Input */
var Input = React.createClass({
  addComment: function(event) {
    // Stop form from submitting
    event.preventDefault();

    // Take info from form to make obj
    var message = {
      author: this.refs.author.value,
      comment: this.refs.message.value
    }

    // Add fish to app state
    this.props.addMessage(message);
    this.refs.messageForm.reset();
  },
  render: function() {  
    return (
      <div className="form">
        <form className="input" ref="messageForm" onSubmit={this.addComment}>
          <label for="author">Author </label>
          <input type="text" ref="author" required />

          <label for="message">Message</label>
          <input type="text" ref="message" required />
          <button type="Submit">Submit Message</button>
        </form>
        <button onClick={this.props.loadSamples}>Load previous messages</button>
      </div>  
    )
  }
});


ReactDOM.render(<MessageMaker/>, document.querySelector('#main'));
