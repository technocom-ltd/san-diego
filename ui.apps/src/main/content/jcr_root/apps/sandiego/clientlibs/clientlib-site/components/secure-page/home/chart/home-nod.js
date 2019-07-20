'user strict';
$(function () {

  var chartID = 'cmp-chart-nod__chart',
    chartType = 'doughnut',
    legendID = 'cmp-chart-nod__legend',
    data = [11, 12, 13],
    labels = ['NOD total YTD', 'NOD in Work', 'NOD approved'],
    color = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
    title = {
      display: false,
      text: ' NOD',
      fontFamily: 'Sarabun',
      fontSize: 24,
      position: 'top'
    }


  generateChart(chartID, chartType, legendID, data, labels, color, title);
});
