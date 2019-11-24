var connection = require("../config/connection.js");


// FIX ALL THESE FUNCTIONS
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO ";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE ";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js)
module.exports = orm;
