var db = require('../db');

// deals with queries
module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {
      // receives request from controller
      // queries db
      // sends response
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};