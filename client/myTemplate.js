Template.myTemplate.topGenresChart = function() {
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: "Your Progress"
        },
        tooltip: {
            formatter: function() {
                return 'The weights for <b>' + this.x + '</b> are <b>' + this.y + '</b>,  '+ this.series.name;
            }
            // pointFormat: '<b>{point.percentage:.1f}1,2,3</b>'
        },
        plotOptions: {
            line: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        xAxis: {
            title: {
                text: 'Date'
            }
        },

        series: [{
            name: 'BenchPress',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Incline Press',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Decline',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'Cable Crosses',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    };
};
