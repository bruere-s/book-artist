var url = new URL(window.location.href);
var page = url.pathname.substring(1, url.pathname.length - 1);

$(document).ready(function() {
  highlightHeader();
});


function     highlightHeader() {
  $('.block-header').each( function() {
    if (page == '/')
      page = 'home';
    var str = "block-header-";
    var header = str.concat(page);
    if (header.localeCompare($(this).attr('id')) == 0)
      $(this).addClass('border-bottom');
    else 
      $(this).removeClass('border-bottom');
  });
}

$("#button-d-menu").click(function() {
  $("#d-menu").slideToggle( "fast", function() {
  });
  $("#header").mouseleave(function() {
    ("#d-menu").slideToggle( "fast", function() {
    });
  });
});




















/*
    $('#block-header-home').click( function(){
      $( "#panel-home" ).toggle('slide');
      moveBorderHeader(0);
      changeSlide(0);
    });

    $('#block-header-about').click( function(){
      moveBorderHeader(1);
      changeSlide(1);
    });
    $('#block-header-gallery').click( function(){
      moveBorderHeader(2);
      changeSlide(2);
    });
    $('#block-header-contact').click( function(){
      moveBorderHeader(3);
      changeSlide(3);
    });

  });

  function moveBorderHeader(nb) {
    var i = 0;
    $('.block-header').each(function () {
      if (i != nb) {
        $(this).removeClass( "border-bottom");
      }
      else
        $(this).addClass( "border-bottom");
      i++;
    });
  }

  function changeSlide(nb) {
    var i = 0;
    $('.slide').each(function () {
      if (i != nb)
        $(this).hide();
      else
        $(this).show();
      i++;
    });*/



