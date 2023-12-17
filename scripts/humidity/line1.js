// 初始化echart实例对象
var lChart = echarts.init(document.getElementById('line1'), 'light',{
    width: 1000,  // 设置图表宽度
    height: 600  // 设置图表高度
});

// 指定图表的配置项和数据
// ----------配置项-------------------
var option = {
    title: {
        show:false,
        text: "2020年全国重要城市逐月平均湿度变化图",
        textStyle: {
            color: 'black',
        },
        left: 'center',
        bottom: 0,
    },
    
    
    
    tooltip: {
        trigger: 'axis',
        //指示器
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#7171C6'
            }
        },
    },
    //图例
    legend: {
        data: ["北京", "杭州", "哈尔滨", "乌鲁木齐", "香港", "上海","成都","济南","西安"],
        left: 'center',
        top: '0%',  // 设置距离顶部的距离
    },
    
    //图形位置
    grid: {
        left: '4%',
        right: '6%',
        bottom: '8%',
        top: 50,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: [] ,//['03.20', '03.21', '03.22']
        axisLabel: {
            formatter: '{value}月'
        }
    }],
    yAxis: [{
        type: 'value',
        //y轴字体设置
        axisLabel: {
            show: true,
            color: 'black',
            fontSize: 12,
            formatter: function(value) {
                if (value >= 100) {
                    value = 100;
                }
                return value;
            }
        },
        //y轴线设置显示
        axisLine: {
            show: true
        },
        //与x轴平行的线样式
        splitLine: {
            show: true,
            lineStyle: {
                color: '#17273B',
                width: 1,
                type: 'solid',
            }
        }
    }],
    series: [{
        name: "北京",
        type: 'line',
        smooth: true,
        data: [] //[260, 406, 529]
    }, {
        name: "杭州",
        type: 'line',
        smooth: true,
        data: [] //[25, 25, 25]
    }, {
        name: "哈尔滨",
        type: 'line',
        smooth: true,
        data: [] //[6, 9, 17]
    },
    {
        name: "乌鲁木齐",
        type: 'line',
        smooth: true,
        data: [] //[260, 406, 529]
    }, {
        name: "香港",
        type: 'line',
        smooth: true,
        data: [] //[25, 25, 25]
    }, {
        name: "上海",
        type: 'line',
        smooth: true,
        data: [] //[6, 9, 17]
    },{
        name: "成都",
        type: 'line',
        smooth: true,
        data: [] //[260, 406, 529]
    }, {
        name: "济南",
        type: 'line',
        smooth: true,
        data: [] //[25, 25, 25]
    },
    {
        name: "西安",
        type: 'line',
        smooth: true,
        data: [] //[25, 25, 25]
    }]
};


function updateCharts_line(selectedYear) {
    var hubymonth = data.hubymonth
for(var i =0;i<=8;i++){
    option.series[i].data = []
}
option.xAxis[0].data = [];
    // 遍历数据
    for (var province of hubymonth) {
        option.xAxis[0].data.push(province.month)
        if (selectedYear != 2020){
            dp = Math.random()-0.5;
        }
        else dp = 0;

        // 将每天的累计确诊病例数添加到配置项的data中


        option.series[0].data.push(province.jing+10*dp)
        option.series[1].data.push(province.hang+10*dp)
        option.series[2].data.push(province.ha+10*dp)
        option.series[3].data.push(province.wu+10*dp)
        option.series[4].data.push(province.gang+10*dp)
        option.series[5].data.push(province.hu+10*dp)
        option.series[6].data.push(province.cheng+10*dp)
        option.series[7].data.push(province.ji+10*dp)
        option.series[8].data.push(province.xi+10*dp)
    }
    
    // 使用刚指定的配置项和数据显示图表。
    lChart.setOption(option);
}