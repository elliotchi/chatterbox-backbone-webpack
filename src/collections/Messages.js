var Message = require('../models/Message');

const Messages = Backbone.Collection.extend({
  model: Message,
  url: 'https://api.parse.com/1/classes/chatterbox/',

  loadMessages: function() {
    this.fetch({
      data: {
        order: '-createdAt'
      }
    });
  },

  parse: (response, options) => {
    return response.results.reduceRight(function(arr, curr) {
      return arr.concat(curr);
    }, []);
  }
});

module.exports = Messages;