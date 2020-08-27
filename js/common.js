/* fullpage jQuery */
function full() {
  new fullpage('#fullpage', {
    sectionsColor: ['', '', '', '' ,''],
    verticalCentered: false,
    scrollBar: false,
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4' ,'anchor5'],
    menu: '#menu',
  });
}

/* hover-menu-deco */
function hover_menu_underline(){
  var $under_bar = $('.hover-item');
  $('.top-menu-bar>.menu-box-2-background>.menu-box-2>.text-menu>.text-item').mouseenter(function(){
    var orginWidth = $(this).width();
    var originLeft = $(this).position().left;
    

    $under_bar.addClass('active');
    $under_bar.css({
      width: orginWidth + "px",
      left: originLeft + "px",
    });

    console.log(orginWidth);
  })
  $('.top-menu-bar>.menu-box-2-background>.menu-box-2>.text-menu>.text-item').mouseleave(function(){
    $under_bar.removeClass('active');
  })
}
/* 비슷하게는 만듬
function hover_menu_underline(){
  $('.top-menu-bar>.menu-box-2-background>.menu-box-2>.text-menu>.text-item').mouseenter(function(){
    var orginWidth = $(this).width();
    var originLeft = $(this).position().left;
    var $under_bar = $('.hover-item');

    $under_bar.css({
      width: orginWidth + "px",
      left: originLeft + "px",
    });

    console.log(orginWidth);
  })
  $('.top-menu-bar>.menu-box-2-background>.menu-box-2>.text-menu>.text-item').mouseleave(function(){
    $('.hover-item').css('width','0');
  })
}
*/


$(function () {
  full();
  hover_menu_underline();
});
