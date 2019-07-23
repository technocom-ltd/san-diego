'user strict';
$(function () {
  var chartID = 'cmp-total-nod-by-type__chart',
    chartType = 'bar',
    legendID = null,
    data = [34, 9, 22, 1, 0, 2],
    labels = ['YTD total', 'In work', 'Approved', 'Canceled', 'Age > 30', 'Expiring'],
    color = [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
    title = {
      display: false
    },

    options = {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          barPercentage: 0.8,
          ticks: {
            beginAtZero: true
          }

        }],
        yAxes: [{
          display: false,
          gridLines: {
            display: false
          },
          ticks: {
            max: 50,
            display: false,
            beginAtZero: true
          }
        }]
      },
      animation: {
        duration: 1,
        onComplete: function () {
          var chartInstance = this.chart,
            ctx = chartInstance.ctx;

          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function (bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          });
        }
      },
      hover: {
        animationDuration: 0
      },

    }


  generateChart(chartID, chartType, legendID, data, labels, color, title, options);
});
