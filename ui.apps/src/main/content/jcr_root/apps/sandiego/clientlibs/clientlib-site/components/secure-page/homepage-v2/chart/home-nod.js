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
    },
    options = {
      cutoutPercentage: 60,
      title: title,
      legend: {
        display: false,
      },
      tooltips: {
        bodyFontFamily: 'Sarabun',
        bodyFontSize: 16,
        footerFontFamily: 'Sarabun',
        displayColors: false,
        callbacks: {
          label: function (tooltipItem, data) {
            var labels = data.datasets[tooltipItem.datasetIndex].labels,
              values = data.datasets[tooltipItem.datasetIndex].data,
              label = labels[tooltipItem.index],
              value = values[tooltipItem.index],
              total = values.reduce((a, b) => a + b, 0);

            if (label) {
              label += ': ';
            }

            label += value + '/' + total;
            label += ' (' + Math.round(value / total * 100) + '%)';
            return label;
          }
        }
      },
      legendCallback: function (chart) {
        var text = [];
        text.push('<ul class="legend">');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          var dataSet = chart.data.datasets[i].data
          for (var j = 0; j < dataSet.length; j++) {
            text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor[j] + '"></span>');
            if (chart.data.labels[j]) {
              text.push(chart.data.labels[j] + ' (' + dataSet[j] + ')');
            }
            text.push('</li>');
          }
        }
        text.push('</ul>');
        return text.join('');
      }
    }

  generateChart(chartID, chartType, legendID, data, labels, color, title, options);
});
