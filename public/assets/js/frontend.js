// on click events for adding new burgers and changing devoured status

$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      var newEatenStatus = {
        devoured: newStatus
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenStatus
      }).then(
        function() {
          console.log("changed eaten status to", newStatus);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#order-burger").on("submit", function(event) {

      event.preventDefault();
  
      var newBurger = {
        // burger_name: $("#burger").val().trim(),
        burger_name: $("#burger-name").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    
  });
  