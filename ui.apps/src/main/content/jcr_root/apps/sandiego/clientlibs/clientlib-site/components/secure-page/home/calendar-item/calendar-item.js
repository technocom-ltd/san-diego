  var list_items = [{
    id: 1,
    day: '17',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Agenda.pdf'
}, {
    id: 2,
    day: '15',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Haytraochoanh.pdf'
}, {
    id: 3,
    day: '14',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'aem.pdf'
}, {
    id: 4,
    day: '13',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Agenda.pdf'
}, {
    id: 1,
    day: '12',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Agenda.pdf'
}, {
    id: 2,
    day: '11',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Haytraochoanh.pdf'
}, {
    id: 3,
    day: '10',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'aem.pdf'
}, {
    id: 4,
    day: '19',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Agenda.pdf'
}, {
    id: 1,
    day: '12',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Agenda.pdf'
}, {
    id: 2,
    day: '11',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Haytraochoanh.pdf'
}, {
    id: 3,
    day: '10',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'aem.pdf'
}, {
    id: 4,
    day: '19',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.youtube.com/watch?v=knW7-x7Y7RE',
    fileName: 'Agenda.pdf'
}];



  (function calendar_item(element, list_items, $) {
    'use strict';
    var target = $(element);

    if (!editmode.isEditMode && !editmode.isPreviewMode) {
      target.empty();
    }


    $.each(list_items, function (index, item) {

      $("<div class='cmp-calendar-item'>" +
        "<div class='cmp-calendar-item__container'>" +
        "<div class='cmp-calendar-item__date'>" +
        "<div>" +
        item.day +
        "</div>" +
        "<div>" +
        item.month +
        "</div>" +
        "</div>" +

        "<div>" +
        "<div class='cmp-calendar-item__title'>" +
        item.title +
        "</div>" +

        "<div>" +
        "<span class='cmp-calendar-item__icon'></span>" +
        "<a href='" + item.fileLink + "' class='cmp-calendar-item__file'>" + item.fileName + "</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>").appendTo(target);

      //  break after 3 elements
      //      return (index !== 2)
    })
  }('.calendar-item', list_items, jQuery));
