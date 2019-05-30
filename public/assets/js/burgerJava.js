$(document).ready( function() {

  $(".eatBurger").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    const changeDevoured = {
      devoured: 1
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: changeDevoured
    }).then(
      function () {
        console.log("Burger has been eaten!");
        location.reload();
      }
    );
  });

  $(".reorderBurger").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    const changeDevoured = {
      devoured: 0
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: changeDevoured
    }).then(
      function () {
        console.log("Burger has been reordered!");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      name: $("#burg").val().trim(),
      devoured: 0
    };
    $.ajax("api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".deleteBurger").on("click", function (event) {
    event.preventDefault();
    const id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger ", id);
        location.reload();
      }
    );
  });

});