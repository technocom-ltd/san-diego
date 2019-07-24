jQuery(function ($) {
  "use strict";

  function handleExpandNavbar(element) {

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

    $(window).click(function () {
      target.removeClass(className);
    });

    $('.cmp-secure-side-nav__container').click(function (event) {
      event.stopPropagation();
    });
  }

  handleExpandNavbar('.cmp-secure-side-nav__arrow');





  function handleMobileNavbar() {
    //Top Level Navigation (expected to only be one of these)
    $("#side-navbar").not("[data-top-nav-processed='true']").each(function () {
      // Mark the component element as processed to avoid the cyclic processing (see .not(..) above).
      var nav = $(this).attr("data-top-nav-processed", true),
        $body = $('body');


      // Toggle Nav
      $('<div id="toggleSideNav">' +
        '<a href="#mobileSideNav" class="toggle"><span></span><span></span><span></span></a>' +
        '</div>'
      ).appendTo($body);

      // Navigation Panel.
      $(
          '<div id="mobileSideNav" class="cmp-secure-side-nav--mobile">' +
          $(this).html() +
          '</div>'

        )
        .appendTo($body)
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left',
          target: $body,
          visibleClass: 'navPanel-visible'
        });
    });
  }

  handleMobileNavbar();
});
