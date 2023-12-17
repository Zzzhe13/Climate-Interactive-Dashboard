// 初始化echart实例对象
var left1Chart = echarts.init(document.getElementById('left1'), 'light',{
    width: 800,  // 设置图表宽度
    height: 600  // 设置图表高度
});

// 指定图表的配置项和数据
// ----------左1的配置项-------------------
var option = {
    title: {
        text: "全国重要城市每月降水折线图",
        textStyle: {
            color: 'black',
        },
        left: 'center',
        bottom: -5,
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
        top: '10%',  // 设置距离顶部的距离
    },
    
    //图形位置
    grid: {
        left: '4%',
        right: '6%',
        bottom: '8%',
        top: 120,
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
                if (value >= 1000) {
                    value = value / 1000 + 'k';
                }
                return value+'mm';
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


var rainbymonth = data.rainbymonth

// 遍历每一天的数据
for (var province of rainbymonth) {
    // 将每天的累计确诊病例数添加到配置项的data中
    option.xAxis[0].data.push(province.month)
    option.series[0].data.push(province.jing)
    option.series[1].data.push(province.hang)
    option.series[2].data.push(province.ha)
    option.series[3].data.push(province.wu)
    option.series[4].data.push(province.gang)
    option.series[5].data.push(province.hu)
    option.series[6].data.push(province.cheng)
    option.series[7].data.push(province.ji)
    option.series[8].data.push(province.xi)
}

// 使用刚指定的配置项和数据显示图表。
left1Chart.setOption(option);