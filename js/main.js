
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

    // Flot Revenue chart init
    var revenueData = [
        [gd(2014, 10, 10), 5000],
        [gd(2014, 11, 1), 9000],
        [gd(2014, 12, 1), 7500],
        [gd(2015, 1, 1), 9500],
        [gd(2015, 2, 1), 7500],
        [gd(2015, 3, 1), 8500]
    ];
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
    $('#revenue-chart .flot-text').css('color','white');

    // Flot Inquiries chart init
    var inquiriesData = [{
        color:'#1fbba6',
        data: [
            [gd(2015, 1, 1), 300],
            [gd(2015, 2, 1), 500],
            [gd(2015, 3, 1), 400],
            [gd(2015, 4, 1), 600],
            [gd(2015, 5, 1), 700],
            [gd(2015, 6, 1), 400],
            [gd(2015, 7, 1), 500],
            [gd(2015, 8, 1), 300],
            [gd(2015, 9, 1), 200],
            [gd(2015, 10, 1), 500],
            [gd(2015, 11, 1), 700],
            [gd(2015, 12, 1), 1000]
        ]
    },{
        color:'#eaedf1',
        data:[ // dummy
                [gd(2015, 1, 1), 1000],
                [gd(2015, 2, 1), 1000],
                [gd(2015, 3, 1), 1000],
                [gd(2015, 4, 1), 1000],
                [gd(2015, 5, 1), 1000],
                [gd(2015, 6, 1), 1000],
                [gd(2015, 7, 1), 1000],
                [gd(2015, 8, 1), 1000],
                [gd(2015, 9, 1), 1000],
                [gd(2015, 10, 1), 1000],
                [gd(2015, 11, 1), 1000],
                [gd(2015, 12, 1), 1000]
            ]
    }];

    $.plot("#graph-inquiries", inquiriesData, {
        series: {
            stack: 0,
            bars: { show: true, fill:1, lineWidth:0, barWidth: (3600000*24*17), align:'center' },
            lines: { show: false, steps: false },
            points: { show: false }
        },
        xaxis: {
            mode:"time",
            monthNames: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            tickSize: [1, "month"],
            max:gd(2014, 12, 15),
            max:gd(2015, 12, 15),
            tickLength: 0
        },
        yaxis: {
            ticks:false,
            tickColor:'#9ea7b3',
            min: -1,
            max: 1000,
            tickLength: 0
        },
        grid: {
            show:true,
            borderColor:'transparent',
            labelMargin: 0,
            tickColor:'white',
            color:'white'
        },
        shadowSize: 0
    });
    $('#graph-inquiries .flot-text').css('color','#9ea7b3');
});

function yTickFormatter(val, axis) {
    return (val>0) ? val / 1000 + "k" : 0;
}

function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
}