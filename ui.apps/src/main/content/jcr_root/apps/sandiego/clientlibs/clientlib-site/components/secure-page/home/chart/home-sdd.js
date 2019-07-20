'user strict';
$(function () {

  var chartID = 'cmp-chart-sdd__chart',
    chartType = 'doughnut',
    legendID = 'cmp-chart-sdd__legend',
    data = [1, 12, 24],
    labels = ['SDD total YTD', 'SDD in Work', 'SDD approved'],
    color = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
    title = {
      display: false
    }

  generateChart(chartID, chartType, legendID, data, labels, color, title);
});
