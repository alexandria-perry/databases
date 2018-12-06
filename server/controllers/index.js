var models = require('../models');
// use promises
module.exports = {
  messages: {
    get: function (req, res) {
      // call get function in models(res)
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // call post function in models(req, res)
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

