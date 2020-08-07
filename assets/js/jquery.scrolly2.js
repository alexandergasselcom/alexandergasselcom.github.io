//Smooth Scroll to Anchors 
$(document).ready(function(){
      $( ".sscroll" ).click(function( event ) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: $($(this).attr("id")).offset().top -100}, 500);
      });
 });