$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").slideToggle();
  });

  $("button#size").click(function() {
    $(".size-show").slideDown();
    $(".habitat-show").hide();
    $(".diet-show").hide();
  });

  $("button#habitat").click(function() {
    $(".habitat-show").slideDown();
    $(".size-show").hide();
    $(".diet-show").hide();
  });

  $("button#diet").click(function() {
    $(".diet-show").slideDown();
    $(".habitat-show").hide();
    $(".size-show").hide();
  });

});
