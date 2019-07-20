function generateChart(chartId, type, legendID, data, labels, backgroundColor, title) {
  var ctx = document.getElementById(chartId).getContext('2d');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      datasets: [{
        data: data,
        labels: labels,
        backgroundColor: backgroundColor,
        borderWidth: 0,
      }]
    },
    options: {
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
            if (chart.data.datasets[i].labels[j]) {
              text.push(chart.data.datasets[i].labels[j] + ' (' + dataSet[j] + ')');
            }
            text.push('</li>');
          }
        }
        text.push('</ul>');
        return text.join('');
      }
    }
  });

  var myLegendContainer = document.getElementById(legendID);
  myLegendContainer.innerHTML = myChart.generateLegend();
}
