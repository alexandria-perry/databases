var db = require('../db');
var utils = require('./utils');

module.exports = {
  messages: {
    get: function (request, response) {
      utils.sendResponse(response, {results: messages});
    }, // a function which produces all the messages
    post: function (request, response) {
      utils.collectData(request, function(message) {
            // message.objectId = ++objectIdCounter;
            // messages.push(message);
        utils.sendResponse(response, {objectId: message.objectId}, 201);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (request, response) {
      utils.sendResponse(response, {results: users});
    }, // a function which produces all the messages
    post: function (request, response) {
      utils.collectData(request, function(message) {
        user.objectId = ++objectIdCounter;
        users.push(message);
        utils.sendResponse(response, {objectId: user.objectId}, 201);
      });
    } // a function which can be used to insert a message into the database
  }
};
