var clics = 0;

$(document).ready(function() {

  $('.answer').hide();
  $('#closer').hide();

  $('h3').click(function() {

    $(this).next('.answer').toggle(function() {

      $(this).next('.answer');

    }, function() {

      $(this).next('.answer').fadeIn('fast');

    });

    if ($(this).hasClass('X')) {
      $(this).removeClass('X');
    } else {
      $(this).addClass('X');
    };

    if ($('.X').length >= 3) {

      $('#X').fadeIn('fast');

    } else {
      $('#X').hide();
      var abiertas = $('.X').length
      console.log(abiertas);
    }
  }); //Close Function Click	            

}); //Close Function Ready

$('#closer').click(function() {
  $('.answer').fadeOut(200);
  $('h3').removeClass('X');
  $('#closer').fadeOut('fast');
});