// YOU DO NOT NEED TO EDIT this code. But do take the time to understand what it's doing.
if (!/(&|\?)username=/.test(window.location.search)) {
  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }
  newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
  window.location.search = newSearch;
}

// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader("X-Parse-Application-Id", "voLazbq9nXuZuos9hsmprUz7JwM2N0asnPnUcI7r");
  jqXHR.setRequestHeader("X-Parse-REST-API-Key", "QC2F43aSAghM97XidJw8Qiy1NXlpL5LR45rhAVAf");
});

var Message = require('./models/Message');
var Messages = require('./collections/Messages');
var FormView = require('./views/Form');
var MessagesView = require('./views/Messages.js');

var messages = new Messages();
messages.loadMessages();
var formView = new FormView({el: $('#main'), collection: messages}) ;
var messagesView = new MessagesView({el: $('#chats'), collection: messages});



// setInterval(messages.loadMessages.bind(messages), 1000);