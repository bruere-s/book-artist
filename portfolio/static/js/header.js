   function AdaptHeader() {
    var y = document.getElementById('header').clientHeight;

    var x = $(".text-header").css('height');
    $('.block-header').css({"height" : y, "padding-top" : ((y - parseInt(x)) / 2)});

    var x = $("#img-d-menu").css('height');
    $('.block-d-menu').css({"height" : y, "padding-top" : ((y - parseInt(x)) / 2)});
  }

  $( document ).ready(function() {
    AdaptHeader();
  });

  window.onresize = function() {
   AdaptHeader();
 };

