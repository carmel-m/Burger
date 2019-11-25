var connection = require("../config/connection.js");

//  Do I need a helper function to convert object key/value pairs to SQL syntax?
//  Ditto question mark function



// FIX ALL THESE FUNCTIONS - DON'T REALLY UNDERSTAND
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, objColVals, condition, cb) {
    var queryString =
      "UPDATE " + table + "SET " + objColVals + " WHERE " + condition;

    console.log(queryString);

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
