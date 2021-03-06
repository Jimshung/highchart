Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  	title: {
        text: ''
    },
  xAxis: {
    type: 'datetime'
  },
   tooltip: {
         valueDecimals: 4,
        xDateFormat: '%Y-%m-%d',
        shared: true
    },
yAxis: {
        plotLines: [{ // mark the weekend
            color: 'grey',
            width: 1,
            value: 29.9200,
            dashStyle: 'LongDash'
        }],
                labels: {
            format: '{value:.4f}'
        },
        min: 29.5000,
        max: 30.7540,
        title: {
            text: ''
        }
    },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5
        }
      },
      marker: {
        enabled: false
      },
      pointIntervalUnit: 'day',
      pointStart: Date.UTC(2017, 5, 5)
    }
  },
  series: [{
    name: '銀行賣出-即期',
    data: [29.73, 29.735, 29.73, 29.75, 29.735, 29.81, 29.86, 29.845, 29.89, 29.99, 30.01, 30.04, 30.08, 30.09, 30.025, 29.975, 29.98, 30.075, 30.02, 30.07, 30.07, 30.15, 30.145, 30.225, 30.235, 30.235, 30.225, 30.13, 30.01, 30.05, 30.065, 30.01, 30.035, 30.1, 30.09, 29.99, 29.985, 30.03, 29.88, 29.915, 29.845, 29.88, 29.87, 29.85, 29.835, 29.875, 29.84, 29.865, 29.95, 29.985, 29.95, 29.935, 30, 29.955, 29.97, 29.97, 29.94, 29.935, 29.91, 29.88, 29.81, 29.845, 29.8, 29.83, 29.765, 29.74, 29.71, 29.745, 29.69, 29.64, 29.665, 29.675, 29.7, 29.75],
    zones: [{
      color: '#FFD700'
    }]
  }]
});
