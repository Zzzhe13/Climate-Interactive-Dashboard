
let add=[]
function updateCharts() {
    // Use the selectedYear variable to update charts in the center
    // Example: Draw charts for the selected year
    console.log("Updating charts for year:", selectedYear);
    // Add your chart update logic here
    // 将每个省的累计确诊病例数添加到配置项的data中
    var provinces1 = data.areaTree[0].temperature
    var bardata=provinces1.slice()
    provinces1.sort(function (a, b) {
     return a.avg - b.avg;
     });

    if(change==0){
        mapOption.series[0].data=[]
        for (var province of provinces1) {
            // 将每个省的累计确诊病例数添加到配置项的data中
            mapOption.series[0].data.push({
                'name': province.name,
                'value': province.avg
            })
        }console.log( mapOption.series[0].data)
        for (let i = 0; i < mapOption.series[0].data.length; i++) {
            if (selectedYear != 2022){
                dp = (Math.random() - 0.5) * 3;
            }
            else dp = 0;
            mapOption.series[0].data[i].value += dp;
            for(let t=0;t<bardata.length;t++){
                if(bardata[t].name==mapOption.series[0].data[i].name){
                    bardata[t].avg = mapOption.series[0].data[i].value;
                }
            }
        }
        bardata.sort(function (a, b) {
            return a.avg - b.avg;
        });
        barOption.yAxis.data=provinces1.map(function (item) {
            return item.name;
          })
          barOption.series.data=provinces1.map(function (item) {
            return item.avg;
          })
        change=1
    }
}

function update_ori(selectedYear) {
    var provinces = data.areaTree[0].temperarture
    option.series[0].data = mapOption.series[0].data
    // 遍历每一个省自治区、直辖市 {"name": "黑龙江", "total": 500, "avg": 5925.346},
    // Set the updated option to the chart
    console.log(option.series[0].data)
    myChart.setOption(option);
}


function update_line(selectedYear){
    if(selectedYear !== 2022){
        var minIncrease = 1; // 最小增加值
        var maxIncrease = 3; // 最大增加值
        Object.keys(MonthlyData).forEach(function(city) {
            MonthlyData[city].forEach(function(item) {
                var randomIncrease = Math.floor((Math.random()-0.5) * (maxIncrease - minIncrease + 1) + minIncrease); // 生成介于最小增加值和最大增加值之间的随机值
                item.Temperature += randomIncrease; // 对每个月份的温度增加随机值
            });
        });

        // 更新图表
        run(MonthlyData);
    }
}