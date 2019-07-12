(function (element, $) {
  'use strict';
  var target = $(element),
    scroll,
    timer_1,
    timer_2,
    className = 'flip-text-box';


  $(window).scroll(function () {

    scroll = $(window).scrollTop();
    if (scroll > 1800 && !target.eq(0).hasClass(className) && !target.eq(1).hasClass(className) && !target.eq(2).hasClass(className)) {
      target.eq(0).addClass(className);
      timer_1 = setTimeout(function () {
        target.eq(1).addClass(className);
      }, 300);
      timer_2 = setTimeout(function () {
        target.eq(2).addClass(className);
      }, 600);
    } else if (scroll <= 1800) {
      target.removeClass(className);
    }
  });
}('.cmp-text--process', jQuery));
