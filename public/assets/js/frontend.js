// on click events for adding new burgers and changing devoured status

$(function() {
  $(".change-status").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newStatus = $(this).data("newstatus");
    console.log(id);
    var newEatenStatus = {
      devoured: newStatus
    };

    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id,
      data: newEatenStatus
    }).then(function() {
      console.log("changed eaten status to", newStatus);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger-name")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
