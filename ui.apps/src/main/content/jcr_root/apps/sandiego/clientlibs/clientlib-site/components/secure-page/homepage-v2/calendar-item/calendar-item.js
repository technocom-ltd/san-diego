  var list_items = [{
    id: 1,
    day: '17',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Agenda.pdf'
}, {
    id: 2,
    day: '15',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Haytraochoanh.pdf'
}, {
    id: 3,
    day: '14',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'aem.pdf'
}, {
    id: 4,
    day: '13',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Agenda.pdf'
}, {
    id: 1,
    day: '12',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Agenda.pdf'
}, {
    id: 2,
    day: '11',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Haytraochoanh.pdf'
}, {
    id: 3,
    day: '10',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'aem.pdf'
}, {
    id: 4,
    day: '19',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Agenda.pdf'
}, {
    id: 1,
    day: '12',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Agenda.pdf'
}, {
    id: 2,
    day: '11',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'Haytraochoanh.pdf'
}, {
    id: 3,
    day: '10',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
    fileName: 'aem.pdf'
}, {
    id: 4,
    day: '19',
    month: 'Jul,2019',
    title: 'This is the subject of a meeting for approving documents of Core EA',
    fileLink: 'https://www.fshare.vn/file/ICXCLPJBP9YP?token=1563783680',
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
        "  <div class='cmp-calendar-item__container'>" +
        "    <div class='cmp-calendar-item__date'>" +
        "      <div>" + item.day + "</div>" +
        "      <div>" + item.month + "</div>" +
        "    </div>" +
        "    <div>" +
        "      <div class='cmp-calendar-item__title'>" + item.title + "</div>" +
        "      <div class='cmp-calendar-item__file'>" +
        "      <a href='" + item.fileLink + "' target='_blank'>" + item.fileName + "</a>" +
        "      </div>" +
        "    </div>" +
        "  </div>" +
        "</div>").appendTo(target);

      //  break after 3 elements
      //      return (index !== 2)
    })
  }('.calendar-item', list_items, jQuery));
