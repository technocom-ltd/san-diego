  var list_items = [{
    id: 1,
    type: 'NOD',
    title: 'This is the subject of a notification for approving documents.',
    time: '5 mins ago',
    status: 'Submitted'
}, {
    id: 2,
    type: 'SDD',
    title: 'This is the subject of a notification for approving documents.',
    time: '15 mins ago',
    status: 'Internal accepted'
}, {
    id: 3,
    type: 'SDD',
    title: 'This is the subject of a notification for approving documents.',
    time: '25 mins ago',
    status: 'Rejected'
}, {
    id: 4,
    type: 'NOD',
    title: 'This is the subject of a notification for approving documents.',
    time: '30 mins ago',
    status: 'Submitted'
}];



  (function notification_item(element, list_items, $) {
    'use strict';
    var target = $(element);

    //    if (editmode.isEditMode) {
    //      return;
    //    } else if (editmode.isPreviewMode) {
    //      return;
    //    }


    $.each(list_items, function (index, item) {

      $("<div class='cmp-notification-item'>" +
        "<div class='cmp-notification-item__container'>" +
        "<div class='cmp-notification-item__type'>" +
        item.type +
        "</div>" +
        "<div>" +
        "<div class='cmp-notification-item__title'>" +
        item.title +
        "</div>" +
        "<div class='cmp-notification-item__hellip'>" +
        "<div class='cmp-notification-item__actions'>" +
        "<div>Mask as read</div>" +
        "<div>Unsubcribe</div>" +
        "</div>" +
        "</div>" +
        "<div>" +
        "<div class='cmp-notification-item__time'>" + item.time + "</div>" +
        "<div class='cmp-notification-item__status'>" + item.status + "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>").appendTo(target);

      //  break after 3 elements
      return (index !== 2)
    })


  }('.notification-item', list_items, jQuery));


  $(function () {
    var target = $('.cmp-notification-item__hellip'),
      className = 'active';

    target.click(function (event) {
      if ($(this).hasClass(className)) {
        target.removeClass(className);
      } else {
        target.removeClass(className);
        $(this).addClass(className);
        event.stopPropagation();
      }
    })

    $(window).click(function () {
      target.removeClass(className);
    })
  })
