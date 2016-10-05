$(document).ready(function() {
  $("#button-d-menu").click(function() {
    $("#d-menu").slideToggle( "slow", function() {
    });
    $("#header").mouseleave(function() {
      ("#d-menu").slideToggle( "slow", function() {
      });
    });
  });

  $('#block-header-home').click( function(){
    $('#block-header-home').addClass( "border-bottom");
    $('#panel-home').show();
    $('#panel-contact').hide();
    $('#block-header-contact').removeClass( "border-bottom");
    $('#panel-about').hide();
    $('#block-header-about').removeClass( "border-bottom");
    $('#panel-gallery').hide();
    $('#block-header-gallery').removeClass( "border-bottom");

  });
  $('#block-header-about').click( function(){
    $('#block-header-about').addClass( "border-bottom");
    $('#panel-about').show();
    $('#panel-contact').hide();
    $('#block-header-contact').removeClass( "border-bottom");
    $('#panel-home').hide();
    $('#block-header-home').removeClass( "border-bottom");
    $('#panel-gallery').hide();
    $('#block-header-gallery').removeClass( "border-bottom");
  });
  $('#block-header-gallery').click( function(){
    $('#block-header-gallery').addClass( "border-bottom");
    $('#panel-gallery').show();
    $('#panel-contact').hide();
    $('#block-header-contact').removeClass( "border-bottom");
    $('#panel-about').hide();
    $('#block-header-about').removeClass( "border-bottom");
    $('#panel-home').hide();
    $('#block-header-home').removeClass( "border-bottom");
  });
  $('#block-header-contact').click( function(){
    $('#block-header-contact').addClass( "border-bottom");
    $('#panel-contact').show();
    $('#panel-about').hide();
    $('#block-header-about').removeClass( "border-bottom");
    $('#panel-home').hide();
    $('#block-header-home').removeClass( "border-bottom");
    $('#panel-gallery').hide();
    $('#block-header-gallery').removeClass( "border-bottom");
  });

});
