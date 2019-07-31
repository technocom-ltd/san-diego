function updateTable(dataList) {
  var target = $('.cmp-nod-reports-table-v1 table');
  target.empty();

  $('<tr class="table-header">' +
    '<th width="8%">ID</th>' +
    '<th width="28%">Report Title</th>' +
    '<th width="16%">Framework</th>' +
    '<th width="12%">Time to Complete</th>' +
    '<th width="12%">Approval Date</th>' +
    '<th width="12%">Requestor</th>' +
    '<th width="12%">Status</th>' +
    '</tr>').appendTo(target);


  $.each(dataList, function (index, data) {

    $("<tr>" +
      "<td>" +
      "<a href='/content/sandiego/secure-homepage/nod/nod-reports/document-detail.html'>" + data.id + "</a>" +
      "</td>" +
      "<td>" +
      "<a href='/content/sandiego/secure-homepage/nod/nod-reports/document-detail.html'>" + data.title + "</a>" +
      "</td>" +
      "<td> <a href='/content/sandiego/secure-homepage/nod/nod-reports/document-detail.html'>" + data.framework + "</a>" +
      "</td>" +
      "<td>" + data.timeToComplete + "</td>" +
      "<td>" + data.approvalDate + "</td>" +
      "<td>" + data.requestor + "</td>" +
      "<td>" + data.status + "</td>" +
      "</tr>").appendTo(target);
  })
}


$(function () {
  var dataList = [
    {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }, {
      id: 543267,
      title: 'ReportTitleName 01',
      framework: 'Service Desk',
      timeToComplete: '<90 days',
      approvalDate: '11/28/2018',
      requestor: 'John Doe',
      status: 'Approval'
  }]

  updateTable(dataList);


})
