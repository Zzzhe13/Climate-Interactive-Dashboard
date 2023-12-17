// 初始化echart实例对象
var Parallelcharts = echarts.init(document.getElementById('Parallel'), 'light',{
    width: 1000,  // 设置图表宽度
    height: 800  // 设置图表高度
});
var lastp= "北京";
var lasty=2022;

function updateCharts4(selectedYear,selectedprovince) {
    var schema4 = [
        { name: 'date', index: 0, text: '日期' },
        { name: 'AQIindex', index: 1, text: 'AQI' },
        { name: 'PM25', index: 2, text: 'PM2.5' },
        { name: 'PM10', index: 3, text: 'PM10' },
        { name: 'CO', index: 4, text: ' CO' },
        { name: 'NO2', index: 5, text: 'NO2' },
        { name: 'SO2', index: 6, text: 'SO2' },
        { name: '等级', index: 7, text: '等级' }
      ];
      var lineStyle = {
        width: 1,
        opacity: 0.5
      };
    var  option4 = {
        title: {
            text: selectedprovince+'地区 AQI分布',
            textStyle: {
                color: 'white',
                fontStyle: 'normal',
  
            },
            left: 'center',
            bottom: 0
  
        },
        backgroundColor: '#333',
        grid: {
            left: '5%',
            right: '5%',
            top: '5%',
            bottom: '5%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1
        },
        parallelAxis: [
          {
            dim: 0,
            name: schema4[0].text,
            inverse: true,
            max: 31,
            nameLocation: 'start'
          },
          { dim: 1, name: schema4[1].text },
          { dim: 2, name: schema4[2].text },
          { dim: 3, name: schema4[3].text },
          { dim: 4, name: schema4[4].text },
          { dim: 5, name: schema4[5].text },
          { dim: 6, name: schema4[6].text },
          {
            dim: 7,
            name: schema4[7].text,
            type: 'category',
            data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
          }
        ],
        visualMap: {
          show: true,
          min: 0,
          max: 150,
          dimension: 2,
          inRange: {
            color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
            // colorAlpha: [0, 1]
          }
        },
        parallel: {
          left: '5%',
          right: '12%',
          bottom: 50,
          parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
              color: '#fff',
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: '#aaa'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#777'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: selectedprovince,
            type: 'parallel',
            lineStyle: lineStyle,
            data: dataParallel[0],
          },
        ],
      }
    var datanew = dataParallel[0];
    if(lastp != selectedprovince || selectedYear != lasty) {
        datanew = dataParallel[parseInt(selectedYear*Math.random())%3];
        for(var dnew of datanew){
            for(let i=1 ; i<=6 ;i++){
                dnew[i] = parseInt(dnew[i]*(Math.random() + 0.9));
            }
            if(dnew[1] <= 50) dnew[7] = '优';
            else if(dnew[1] <= 100) dnew[7] = '良';
            else if(dnew[1] <= 150) dnew[7] = '轻度污染';
            else if(dnew[1] <= 200) dnew[7] = '中度污染';
            else if(dnew[1] <= 250) dnew[7] = '重度污染';
            else if(dnew[1] <= 300) dnew[7] = '严重污染';
        }
        option4.series.data = datanew;
    }
    console.log(selectedprovince,selectedYear)
    console.log(lastp,lasty)
    lastp = selectedprovince ;
    lasty = selectedYear;
    
    Parallelcharts.setOption(option4);
}