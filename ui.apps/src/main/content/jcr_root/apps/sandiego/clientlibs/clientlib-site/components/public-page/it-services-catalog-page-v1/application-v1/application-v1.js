$(function () {
  var target = $('.cmp-application--v1 .cmp-application__container'),
    className = 'expand';

  target.click(function () {
    if ($(this).hasClass(className)) {
      $(this).removeClass(className);
    } else {
      $(this).addClass(className);
    }
  })

})
