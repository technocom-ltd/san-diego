'use strict';
$(function () {

  var target = $('.cmp-it-guiding-accordion__title');

  target.click(function () {
    var parent = $(this).parent().parent(),
      className = 'expand-description';

    if (parent.hasClass(className)) {
      $('.cmp-it-guiding-accordion').removeClass(className);
      return;
    } else {
      $('.cmp-it-guiding-accordion').removeClass(className);
      parent.addClass(className);
    }

  })
})
