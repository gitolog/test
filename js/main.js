
$(document).ready(function() {

    // Pie chart init
    $('.easy-pie-chart').easyPieChart({
        barColor : '#14b9d6',
        trackColor : '#FFFFFF',
        scaleColor : false,
        lineCap : 'square',
        lineWidth : 20,
        size : 200
    });

    // Flot Revenue chart
    var revenueData = [[gd(2014, 10, 10), 5000], [gd(2014, 11, 1), 9000], [gd(2014, 12, 1), 7500], [gd(2015, 1, 1), 9500], [gd(2015, 2, 1), 7500], [gd(2015, 3, 1), 8500]];
    $.plot("#revenue-chart", [revenueData], {
        series: {
            lines: { show: true, lineWidth: 6 },
            points: { show: false }
        },
        xaxis: {
            mode:"time",
            timeformat: "%b",
            monthNames: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            tickSize: [1, "month"],
            tickLength: 0
        },
        yaxis: {
            tickColor:'#16a693',
            tickSize:2000,
            tickFormatter: yTickFormatter,
            min: -1,
            max: 10001,
            tickDecimals: 0
        },
        grid: {
            borderColor:'transparent',
            labelMargin: 15,
            tickColor:'white',
            color:'white'
        },
        shadowSize: 0,
        colors: [ 'white' ]
    });
    $('.flot-text').css('color','white');
});
function yTickFormatter(val, axis) {
    return (val>0) ? val / 1000 + "k" : 0;
}
function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
}