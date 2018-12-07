var models = require('../models');
// use promises
module.exports = {
  messages: {
    get: function (req, res) {
      // call get function in models(res)
      models.messages.get(function(err, results) {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // call post function in models(req, res)
      var params = [ req.body.message, req.body.username, req.body.roomname ];
      models.messages.post(params, function(err, results) {
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body.username ];
      models.users.post(params, function(err, results) {
        res.sendStatus(201);
      });
    }
  }
};

