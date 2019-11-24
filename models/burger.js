// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// FIX THESE
var burger = {
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cb) {

  },

  updateOne: function(cb) {
      
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
