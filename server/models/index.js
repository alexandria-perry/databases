var db = require('../db');

// deals with queries
module.exports = {
  messages: {
    get: function (callback) {
      //console.log('we did a get request');
      var queryStr = "select messages.id, messages.message, messages.roomname, users.name \
                from messages left outer join users on (messages.userId = users.id) \
                order by messages.id desc";
      db.query(queryStr, function(err, results) {
        // console.log('what we got back from the db', data);
        // console.log('this is the type of data: ',typeof data);
        callback(err, results);
      });
      // res.end("we got the get request");
      // console.log('req.body', req.body);

    }, // a function which produces all the messages
    
    // var sql = "SELECT ";
    
    // db.query(sql, function(err,result) {
    //   if (err) {
    //     throw err;
    //   }
    //   res.end('success')
    // }) 
      
    

    post: function (params, callback) {
      var queryStr = 'INSERT INTO messages(message, userId, roomname) \
                value (?, (select id from users where name = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
      // i: path?, callback that takes req, res
      // receives request from controller
      // queries db
        // db.query("QUERY STRING", values, cb(err, rows, fields))
        // WRITE FILE TO DB
      // sends response
        // res.json???
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        // console.log('what we got back from the db', data);
        // console.log('this is the type of data: ',typeof data);
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryStr = 'insert into users(name) values (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};