var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");


// ROUTES
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.insertOne("name", req.body.burger_name, function(result) {
      // Send back the ID of the burger
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var eaten = "id = " + req.params.id;

    console.log("eaten", eaten);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, eaten, function(result) {
      res.status(200).end();
    });
  });

// Export routes for server.js to use.
module.exports = router;