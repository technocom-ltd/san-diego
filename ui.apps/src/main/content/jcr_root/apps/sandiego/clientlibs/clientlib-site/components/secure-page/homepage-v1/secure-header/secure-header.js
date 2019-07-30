jQuery(function ($) {
  "use strict";

  function handleMobileNavbar() {
    //Top Level Navigation (expected to only be one of these)
    $("#cmp-secure-v1-header").not("[data-top-nav-processed='true']").each(function () {
      // Mark the component element as processed to avoid the cyclic processing (see .not(..) above).
      var nav = $(this).attr("data-top-nav-processed", true),
        $body = $('body');


      // Toggle Nav
      $('<div id="toggleNav-v1">' +
        '<a href="#mobileSideNav-v1" class="toggle"><span></span><span></span><span></span></a>' +
        '</div>'
      ).appendTo($body);

      // Navigation Panel.
      $(
          '<div id="mobileSideNav-v1" class="cmp-secure-v1-header--mobile">' +
          '<div class="cmp-landing-header__container">' +
          $('.cmp-landing-header__container').html() +
          '</div>' +
          '<div class="cmp-landing-header-nav__content">' +
          $('.cmp-navigation--secure-1-header').html() +
          '</div>' +
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
