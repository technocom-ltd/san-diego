function generateChart(chartId, type, legendID, data, labels, backgroundColor, title, options) {
  if (!document.getElementById(chartId)) return;
  var ctx = document.getElementById(chartId).getContext('2d');
  var myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColor,
        borderWidth: 0,
      }]
    },
    options: options
  });

  if (legendID) {
    var myLegendContainer = document.getElementById(legendID);
    myLegendContainer.innerHTML = myChart.generateLegend();
  }
}
