  var list_items = [{
      id: 1,
      title: 'This is the subject of a notification for approving documents.',
      time: 'a day ago',
      status: 'Expiring 09/02/2018'
  },
    {
      id: 2,
      title: 'This is the subject of a notification for approving documents.',
      time: '08/20/2019',
      status: 'Expiring 09/02/2018'
  }];



  (function notification_item(element, list_items, $) {
    'use strict';
    var target = $(element);
    $.each(list_items, function (index, item) {
      $("<div class='cmp-notification-item-1'>" +
        "<div class='cmp-notification-item__container-1'>" +
        "<div>" +
        "<div class='cmp-notification-item__title-1'>" +
        item.title +
        "</div>" +
        "<div class='cmp-notification-item__time-1'>" +
        item.time + "</div>" +
        "</div>" +
        "<div class='cmp-notification-item__status-1'>" +
        item.status +
        "<div class='cmp-notification-item__hellip'>" +
        "<div class='cmp-notification-item__actions'>" +
        "<div>Mask as read</div>" +
        "<div>Unsubcribe</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"

      ).appendTo(target);


      //  break after 3 elements
      return (index !== 1)
    })


  }('.notification-item-1', list_items, jQuery));
