/*
 *  Copyright 2018 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
// Wrap bindings in anonymous namespace to prevent collisions
jQuery(function ($) {
  "use strict";

  function applyComponentStyles(target, newElement) {
    //Top Level Navigation (expected to only be one of these)
    target.not("[data-top-nav-processed='true']").each(function () {
      // Mark the component element as processed to avoid the cyclic processing (see .not(..) above).
      var nav = $(this).attr("data-top-nav-processed", true),
        $body = $('body');

      // Toggle Nav
      $('<div id="toggleNav">' +
        '<a href="#mobileNav" class="toggle"><span></span><span></span><span></span></a>' +
        '</div>'
      ).appendTo($body);

      newElement.appendTo($body)
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

  applyComponentStyles($("#header-navbar-v1 .cmp-navigation"), $(
    '<div id="mobileNav" class="cmp-navigation--mobile">' +
    '<div class="cmp-landing-header__content">' +
    $('.cmp-landing-header__content').html() +
    '</div>' +
    $('.cmp-navigation--landing-1-header').html() +
    '<nav class="cmp-navigation">' +
    $("#header-navbar-v1 .cmp-navigation").html() +
    '</nav>' +
    '</div>'
  ));

  if ($('.cmp-navigation--landing-middle').length !== 0) {
    applyComponentStyles($("#header-navbar .cmp-navigation"), $(
      '<div id="mobileNav" class="cmp-navigation--mobile">' +
      '<div class="cmp-sandiego-logo">' +
      $('.cmp-sandiego-logo').html() +
      '</div>' +
      $('.cmp-navigation--landing-middle').html() +
      '<nav class="cmp-navigation">' +
      $("#header-navbar .cmp-navigation").html() +
      '</nav>' +
      '</div>'
    ));
  } else {
    applyComponentStyles($("#header-navbar .cmp-navigation"), $(
      '<div id="mobileNav" class="cmp-navigation--mobile">' +
      '<div class="cmp-sandiego-logo">' +
      $('.cmp-sandiego-logo').html() +
      '</div>' +
      $('.cmp-navigation--public-page-v2').html() +
      '<nav class="cmp-navigation">' +
      $("#header-navbar .cmp-navigation").html() +
      '</nav>' +
      '</div>'
    ));
  }



});

(function (element, $) {
  'use strict';
  var target = $(element),
    className = "sticky-top",
    scroll,
    mobileBreakpoint = 992;

  $(window).scroll(function () {

    scroll = $(window).scrollTop();
    if (scroll > 500) {
      target.addClass(className);
    } else {
      target.removeClass(className);
    }
  });
}('.cmp-navigation--landing-middle', jQuery));
