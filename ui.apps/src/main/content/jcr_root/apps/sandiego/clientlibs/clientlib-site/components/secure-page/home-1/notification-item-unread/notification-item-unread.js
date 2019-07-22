  var list_items = [];



  (function notification_item(element, list_items, $) {
    'use strict';
    var target = $(element);
    $.each(list_items, function (index, item) {
      $("<div class='cmp-notification-item-unread'>" +
        "<div class='cmp-notification-item__container-unread'>" +
        "<div>" +
        "<div class='cmp-notification-item__title-unread'>" +
        item.title +
        "</div>" +
        "<div class='cmp-notification-item__time-unread'>" + item.time + "</div>" +
        "</div>" +
        "<div>" +
        "<div class='cmp-notification-item__status-unread'>" + item.status + "</div>" +
        "<div class='cmp-notification-item__action-unread'>" + item.status + "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
      ).appendTo(target);


      //  break after 3 elements
      return (index !== 1)
    })


  }('.notification-item-unread', list_items, jQuery));
