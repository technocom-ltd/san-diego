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
  var techButton = $(".cmp-form-button--technology > button");
  var appButton = $(".cmp-form-button--application > button");

  techButton.click(function () {
    if (techButton.text() == 'See all technologies') {
      $(".cmp-layout-container--technology .aem-Grid").addClass("show-all");
      techButton.html('Hide');

    } else {
      $(".cmp-layout-container--technology .aem-Grid").removeClass("show-all");
      techButton.html('See all technologies');
    }
  });

  appButton.click(function () {
    if (appButton.text() == 'See all applications') {
      $(".cmp-layout-container--application .aem-Grid").addClass("show-all");
      appButton.html('Hide');

    } else {
      $(".cmp-layout-container--application .aem-Grid").removeClass("show-all");
      appButton.html('See all applications');
    }
  })
});

(function (element, $) {
  'use strict';
  var target = $(element),
    className = "sticky-top",
    scroll,
    mobileBreakpoint = 992;

  target.click(function () {
    alert('right button clicked');
  })

}('.cmp-form-button--arrow-right button', jQuery));

(function (element, $) {
  'use strict';
  var target = $(element),
    className = "sticky-top",
    scroll,
    mobileBreakpoint = 992;

  target.click(function () {
    alert('right button clicked');
  })

}('.cmp-form-button--arrow-left button', jQuery));
