var connection = require("../config/connection.js");


var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(cb);
      cb(result);
    });
  },

  insertOne: function(name, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + name + "')";
    console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(cb);
      cb(result);
    });
  },

  updateOne: function(eaten, condition, cb) {
    var queryString =
      // "UPDATE burgers SET devoured = true WHERE id = " + id;

      // "UPDATE burgers SET devoured = true WHERE id = " + id;

      "UPDATE burgers SET devoured = " + eaten.devoured + " WHERE " + condition;
console.log(eaten.devoured);
      console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(cb);
      cb(result);
      
    });
  }


};

// Export the orm object for the model (burger.js)
module.exports = orm;
