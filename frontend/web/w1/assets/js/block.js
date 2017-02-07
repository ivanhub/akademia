$(document).ready(function() {
  
  var $cont = $(".blockpack");
  
  $cont.addClass("ready");
  
  setTimeout(function() {
    $cont.addClass("phase-2");

    $(document).on("click", ".section:not(.active)", function() {
      $(".section.active").removeClass("active");
      $cont.addClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".close-btn", function() {
      $cont.removeClass("active");
      $(".section").removeClass("active");
    });

  }, 2500);

});