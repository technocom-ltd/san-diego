(function (element, $) {
  'use strict';
  var target = $(element);

  target.click(function () {
    if (target.text().toUpperCase() == 'READ MORE ABOUT US') {
      window.location.href = "/content/sandiego/landing-page/v1/about-us.html";
    }
  })

}('.cmp-form-button', jQuery));
