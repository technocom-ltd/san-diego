(function (element, $) {
  'use strict';
  var expandButton = $(element),
    target = $("body"),
    className = 'expand-side-navbar';

  expandButton.click(function () {
    if (target.hasClass(className)) {
      target.removeClass(className);

    } else {
      target.addClass(className);

    }
  })
}('.cmp-secure-side-nav__arrow', jQuery));
