  var list_items = [{
    id: 1,
    day: '09/02/2018',
    time: '10:30 AM - 11AM',
    title: 'Internal EA',
    description: 'This is the subject of a meeting for approving documents of Internal EA',
    fileAttach: [
      {
        fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
        fileName: 'Meeting agenda.pdf'
      }
    ]

}, {
    id: 1,
    day: '09/02/2018',
    time: '10:30 AM - 11AM',
    title: 'Full EA',
    description: 'This is the subject of a meeting for approving documents of Full EA',
    fileAttach: [
      {
        fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
        fileName: 'Meeting agenda.pdf'
      }
    ]
}];



  (function calendar_item(element, list_items, $) {
    'use strict';
    var target = $(element);
    if (!editmode.isEditMode && !editmode.isPreviewMode) {
      target.empty();
    }


    $.each(list_items, function (index, item) {
      $("<div class='cmp-calendar-1-item'>" +
        "<div class='cmp-calendar-1-item__container'>" +
        "<div class='cmp-calendar-1-item__date'>" +
        "<div>" + item.day + "</div>" +
        "<div>" +
        item.time + "</div>" +
        "</div>" +
        "<div>" +
        "<div class='cmp-calendar-1-item__title'>" +
        item.title + "</div>" +
        "<div class='cmp-calendar-1-item__description'>" +
        item.description + "</div>" +

        "<div class='cmp-calendar-1-item__file'>" +
        "<a href='" + item.fileAttach[0].fileLink + "' target='_blank'>" +
        item.fileAttach[0].fileName + "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
      ).appendTo(target);
    })
  }('.calendar-item-1', list_items, jQuery));
