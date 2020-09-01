/* fullpage jQuery */
function full() {
  new fullpage('#fullpage', {
    sectionsColor: ['', '#E8EDF3', '#ECEAE7', '', ''],
    verticalCentered: false,
    scrollBar: false,
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
    menu: '#menu',
  });
}
/* top-menu-scroll 
function top_menu_scroll(){
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();

      if (scroll > 0) {
        $('.top-menu-bar>.menu-box-2-background').css('margin-top','0');
      }
      else {
        $('.top-menu-bar>.menu-box-2-background').css('margin-top','36px');
      }
      console.log($(window).position());
    })
  })
}




function menu_scroll(){
  var scroll = $('#fullpage').position('translateY','0');
  if (scroll < 0) {
    $('.top-menu-bar>.menu-box-2-background').css('margin-top','1px');
  }
  else {
    $('.top-menu-bar>.menu-box-2-background').css('margin-top','36px');
  }
}
*/


/* hover-menu-deco */
function hover_menu_underline() {
  var $under_bar = $('.hover-item');
  $('.top-menu-bar>.menu-box-2-background>.menu-box-2>.text-menu>.text-item').mouseenter(function () {
    var orginWidth = $(this).width();
    var originLeft = $(this).position().left;


    $under_bar.addClass('active');
    $under_bar.css({
      width: orginWidth + "px",
      left: originLeft + "px",
    });

    console.log(orginWidth);
  })
  $('.top-menu-bar>.menu-box-2-background>.menu-box-2>.text-menu>.text-item').mouseleave(function () {
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

function main_slide() {

  $('.main-slide-banner>.image-slider>.slide-number>.btn-box>.no-').click(function () {
    var index = $(this).index();
    var $imgActive = $('.section>.main-slide-banner>.image-slider').find('> .active');
    var $numberActive = $('.section>.main-slide-banner>.image-slider>.slide-number>.btn-box').find('> .active');

    $numberActive.removeClass('active');
    $(this).addClass('active');
    $imgActive.removeClass('active');
    $('.main-slide-banner>.image-slider>li').eq(index).addClass('active');
  });

  $('.section>.main-slide-banner>.image-slider>.slide-number>.btn-box>.start-stop-btn').click(function(){
    var $start = $(this).find('> .start');
    var $stop = $(this).find('> .stop');

    if ( $stop.hasClass('active')) {
      $stop.removeClass('active');
      $start.addClass('active');
    }
    else{
      $start.removeClass('active');
      $stop.addClass('active');
    }
    
  });
}




/* 무한움직임용 */
function guide_arrow() {
  $('.section>.scroll-guide-arrow').animate({
    bottom: 110 + "px"
  }, 400, function () {
    $('.section>.scroll-guide-arrow').animate({
      bottom: 105 + "px"
    }, 400, guide_arrow);
  });
};

/* section .2 */
function section_2_slide(){
  $('.section-2 > .section-2-menu-item > .event-slide > .dots-box > .dot').click(function(){
    var index = $(this).index();
    var $activeDot = $('.section-2 > .section-2-menu-item > .event-slide > .dots-box').find('> .active');
    var $activeImg = $('.section-2 > .section-2-menu-item > .event-slide > ul').find('>.active');
    var $img =$('.section-2 > .section-2-menu-item > .event-slide > ul> li');

    $activeDot.removeClass('active');
    $(this).addClass('active');
    $activeImg.removeClass('active');
    $img.eq(index).addClass('active');
  })


  $('.section-2 > .section-2-bottom-menu-item > .sub-slide> .dots-box > .dot').click(function(){
    var index = $(this).index();
    var $activeDot = $('.section-2 > .section-2-bottom-menu-item > .sub-slide> .dots-box').find('> .active');
    var $activeImg = $('.section-2 > .section-2-bottom-menu-item > .sub-slide > ul').find('>.active');
    var $img =$('.section-2 > .section-2-bottom-menu-item > .sub-slide > ul> li');

    $activeDot.removeClass('active');
    $(this).addClass('active');
    $activeImg.removeClass('active');
    $img.eq(index).addClass('active');
  })
}



$(function () {
  full();
  hover_menu_underline();
  main_slide();
  guide_arrow();
  section_2_slide();
});