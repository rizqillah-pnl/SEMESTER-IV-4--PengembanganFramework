//Jquery ini berasal dari web 
//https://www.w3schools.com/howto/howto_css_smooth_scroll.asp

// Add smooth scrolling to all links
$(".page-scroll").on('click', function () {
  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (700) specifies the number of milliseconds 
  // it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top - 80
  }, 500);
});



$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});