'user strict';
$(function () {

  var chartID = 'cmp-chart-nod-1__chart',
    chartType = 'doughnut',
    legendID = 'cmp-chart-nod-1__legend',
    data = [11, 12, 13],
    labels = ['NOD total YTD', 'NOD in Work', 'NOD approved'],
    color = ['#504A4A',
              '#C4C4C4',
              '#838383'],
    title = {
      display: false,
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
