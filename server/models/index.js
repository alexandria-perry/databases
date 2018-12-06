var db = require('../db');

// deals with queries
module.exports = {
  messages: {
    get: function (req, res) {
      //console.log('we did a get request');
      db.query("SELECT * FROM messages", function(err, data) {
        if (err) {
          throw err;
        }
        // console.log('what we got back from the db', data);
        // console.log('this is the type of data: ',typeof data);
        res.end(JSON.stringify(data));
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
      
    

    post: function (req, res) {
      var jsondata = req.body;
      console.log(jsondata);
      var sql = "INSERT INTO messages (username, message, roomname) VALUES ?";
      var args = [];
      db.query(sql, args, function(err, res) {
        if (err) {
          throw err;
        } else {
          res.end('SUCCESS');
        }
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
    get: function () {},
    post: function () {}
  }
};