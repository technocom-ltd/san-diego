function updateTable(dataList) {
  var target = $('.cmp-nod-reports-table table');
  target.empty();

  $('<tr>' +
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
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }, {
      id: 12345,
      title: 'TranPhuocLoc',
      framework: 'Service Desk',
      timeToComplete: '<90days',
      approvalDate: '11/28/2018',
      requestor: 'Loc Tran',
      status: 'Approval'
  }]

  updateTable(dataList);


})
