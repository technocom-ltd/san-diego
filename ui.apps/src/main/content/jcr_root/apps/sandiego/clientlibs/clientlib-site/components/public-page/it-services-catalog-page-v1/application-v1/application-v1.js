$(function () {
  var target = $('.cmp-application--v1 .cmp-application__expand'),
    className = 'expand';

  target.click(function () {
    var parent = $(this).parent();

    if (parent.hasClass(className)) {
      parent.removeClass(className);
    } else {
      parent.addClass(className);
    }
  })

})
