// 初始化echart实例对象
var line1Chart = echarts.init(document.getElementById('time'), 'light',{
    width: 300,  // 设置图表宽度
    height: 800  // 设置图表高度
});

function getVirtualData(year) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');

    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 350 *Math.random())
      ]);
    }
    return data;
  }

  // 使用刚指定的配置项和数据显示图表。
function updateCharts2(selectedYear,selectedprovince) {
  if(!selectedprovince){
      selectedprovince = "北京"
  }
    // 指定图表的配置项和数据
  // ----------左1的配置项-------------------
  var  option = {
      title: {
          text: selectedprovince+'AQI日历图',
          textStyle: {
              color: 'black',
              fontStyle: 'normal',

          },
          left: 'center',
          bottom: 0

      },
      tooltip: {
        position: 'top',
        formatter: function (p) {
          const format = echarts.time.format(p.data[0], '{yyyy}-{MM}-{dd}', false);
          return format + ' AQI:' + p.data[1];
        }
      },
      visualMap: {
        min: 0,
        max: 300,
        calculable: true,
        orient: 'vertical',
        left: '80%',
        top: 'center',
        color: ["#660033", "#cc0000", "#ff9900", "#ffcc80", "#cccc00", "#cbe899", "#87cba8", "#006600"]
    },

      calendar: [
        {
          orient: 'vertical',
          range: String(selectedYear),
          cellSize: [13, 13]  // 调整单元格大小
        },
      ],
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtualData(selectedYear)
      }
    };
    line1Chart.setOption(option);
}