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
$(document).ready(function () {
  $(".cmp-teaser--slide > .cmp-teaser").append('<div class="cmp-teaser__arrow-down"><span></span><span></span><span></span></div>');

  $(".cmp-teaser__arrow-down").click(function () {
    $("html, body").animate({
      scrollTop: $(".teaser").prop("scrollHeight") + 60
    }, 1000);
  })
});


(function (element, $) {
  'use strict';
  var target = $(element),
    target_2 = $('.cmp-teaser--landing-process .cmp-teaser'),
    scroll,
    classNameHalf = 'half-animation',
    classNameFull = 'full-animation';


  $(window).scroll(function () {

    scroll = $(window).scrollTop();
    if (scroll > 700) {
      target_2.eq(0).addClass('slide-up');
      target_2.eq(1).addClass('slide-up');
      target.addClass(classNameHalf);
      if (scroll > 1000) {
        target_2.eq(2).addClass('slide-up');
        target_2.eq(3).addClass('slide-up');
        target.addClass(classNameFull);
      }
      //      else {
      //        target_2.eq(2).removeClass('slide-up');
      //        target_2.eq(3).removeClass('slide-up');
      //        target.removeClass(classNameFull);
      //      }
    }
    //    else {
    //      target_2.eq(0).removeClass('slide-up');
    //      target_2.eq(1).removeClass('slide-up');
    //      target.removeClass(classNameHalf);
    //    }
  });
}('.process-image__container', jQuery));


(function (element, $) {
  'use strict';
  var target = $(element),
    scroll,
    //    className = 'flip-text-box';
    className = 'show';

  $(window).scroll(function () {

    scroll = $(window).scrollTop();
    if (scroll > 1800) {
      target.addClass(className);
    }
    //      !target.eq(0).hasClass(className) &&
    //      !target.eq(1).hasClass(className) &&
    //      !target.eq(2).hasClass(className)) {
    //      target.eq(0).addClass(className);
    //      setTimeout(function () {
    //        target.eq(1).addClass(className);
    //      }, 300);
    //      setTimeout(function () {
    //        target.eq(2).addClass(className);
    //      }, 600);
    //    }
    //    else if (scroll <= 1800) {
    //      target.removeClass(className);
    //    }
  });
}('.cmp-teaser--landing-request', jQuery));


(function (element, $) {
  'use strict';
  var target = $(element),
    scroll,
    className = 'slide-up';


  $(window).scroll(function () {

    scroll = $(window).scrollTop();
    if (scroll > 300) {
      target.addClass(className)
    }
    //    else if (scroll <= 1800) {
    //      target.removeClass(className);
    //    }
  });
}('.cmp-teaser--landing-intro', jQuery));


(function (element, $) {
  'use strict';
  var target = $(element);

  target.each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  })
}('.cmp-teaser--secure-nod-report .cmp-teaser__description p', jQuery));
