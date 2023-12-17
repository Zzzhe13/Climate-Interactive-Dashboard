var dom = document.getElementById("line");
var myLine = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};
var ROOT_PATH = "https://echarts.apache.org/examples";
var option;

var MonthlyData = {
  北京: [
    { Month: "January", Temperature: -4.66 },
    { Month: "February", Temperature: -3.57 },
    { Month: "March", Temperature: 4.27 },
    { Month: "April", Temperature: 12.66 },
    { Month: "May", Temperature: 18.61 },
    { Month: "June", Temperature: 23.02 },
    { Month: "July", Temperature: 24.93 },
    { Month: "August", Temperature: 23.2 },
    { Month: "September", Temperature: 20.49 },
    { Month: "October", Temperature: 10.96 },
    { Month: "November", Temperature: 4.04 },
    { Month: "December", Temperature: -5.96 },
  ],
  武汉: [
    { Month: "January", Temperature: 5.6 },
    { Month: "February", Temperature: 5.47 },
    { Month: "March", Temperature: 14.47 },
    { Month: "April", Temperature: 18.53 },
    { Month: "May", Temperature: 21.61 },
    { Month: "June", Temperature: 27.28 },
    { Month: "July", Temperature: 29.48 },
    { Month: "August", Temperature: 31.03 },
    { Month: "September", Temperature: 25.42 },
    { Month: "October", Temperature: 18.21 },
    { Month: "November", Temperature: 15.06 },
    { Month: "December", Temperature: 5.11 },
  ],
  哈尔滨: [
    { Month: "January", Temperature: -16.83 },
    { Month: "February", Temperature: -12.51 },
    { Month: "March", Temperature: -1.55 },
    { Month: "April", Temperature: 7.44 },
    { Month: "May", Temperature: 12.83 },
    { Month: "June", Temperature: 18.51 },
    { Month: "July", Temperature: 22.54 },
    { Month: "August", Temperature: 19.32 },
    { Month: "September", Temperature: 15.65 },
    { Month: "October", Temperature: 5.46 },
    { Month: "November", Temperature: -3.54 },
    { Month: "December", Temperature: -15.99 },
  ],
  深圳: [
    { Month: "January", Temperature: 16.44 },
    { Month: "February", Temperature: 13.46 },
    { Month: "March", Temperature: 20.44 },
    { Month: "April", Temperature: 22.1 },
    { Month: "May", Temperature: 23.77 },
    { Month: "June", Temperature: 26.98 },
    { Month: "July", Temperature: 28.6 },
    { Month: "August", Temperature: 27.59 },
    { Month: "September", Temperature: 27.64 },
    { Month: "October", Temperature: 24.48 },
    { Month: "November", Temperature: 21.87 },
    { Month: "December", Temperature: 13.23 },
  ],
  西安: [
    { Month: "January", Temperature: 0.23 },
    { Month: "February", Temperature: 0.33 },
    { Month: "March", Temperature: 9.95 },
    { Month: "April", Temperature: 13.53 },
    { Month: "May", Temperature: 17.51 },
    { Month: "June", Temperature: 23.5 },
    { Month: "July", Temperature: 24.09 },
    { Month: "August", Temperature: 24.86 },
    { Month: "September", Temperature: 18.22 },
    { Month: "October", Temperature: 11.94 },
    { Month: "November", Temperature: 7.58 },
    { Month: "December", Temperature: -0.36 },
  ],
  上海: [
    { Month: "January", Temperature: 5.98 },
    { Month: "February", Temperature: 5.19 },
    { Month: "March", Temperature: 11.94 },
    { Month: "April", Temperature: 15.83 },
    { Month: "May", Temperature: 19.45 },
    { Month: "June", Temperature: 25.11 },
    { Month: "July", Temperature: 29.48 },
    { Month: "August", Temperature: 29.96 },
    { Month: "September", Temperature: 23.57 },
    { Month: "October", Temperature: 18.34 },
    { Month: "November", Temperature: 15.74 },
    { Month: "December", Temperature: 5.85 },
  ],
  拉萨: [
    { Month: "January", Temperature: -13.71 },
    { Month: "February", Temperature: -14.96 },
    { Month: "March", Temperature: -4.45 },
    { Month: "April", Temperature: -0.65 },
    { Month: "May", Temperature: 2.1 },
    { Month: "June", Temperature: 7.03 },
    { Month: "July", Temperature: 8.35 },
    { Month: "August", Temperature: 8.33 },
    { Month: "September", Temperature: 4.05 },
    { Month: "October", Temperature: -1.44 },
    { Month: "November", Temperature: -9.24 },
    { Month: "December", Temperature: -7.85 },
  ],
  重庆: [
    { Month: "January", Temperature: 5.38 },
    { Month: "February", Temperature: 4.68 },
    { Month: "March", Temperature: 13.61 },
    { Month: "April", Temperature: 15.84 },
    { Month: "May", Temperature: 18.65 },
    { Month: "June", Temperature: 23.59 },
    { Month: "July", Temperature: 26.65 },
    { Month: "August", Temperature: 29.16 },
    { Month: "September", Temperature: 21.57 },
    { Month: "October", Temperature: 16.47 },
    { Month: "November", Temperature: 13.42 },
    { Month: "December", Temperature: 5.6 },
  ],
};
console.log(MonthlyData);
function run(_rawData) {
  var cities = Object.keys(_rawData); // 获取所有城市名称

  var seriesList = cities.map(function (city) {
    return {
      type: "line",
      smooth: true,
      data: _rawData[city].map(function (item) {
        return [item.Month, item.Temperature];
      }),
      name: city,
    };
  });

  option_line = {
    title: {
      text: "主要城市逐月均气温",
    },
    series: seriesList,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      formatter: function (params) {
        var result = params[0].name + "<br/>";
        params.forEach(function (item) {
          result +=
            item.seriesName + ": " + item.value[1].toFixed(2) + "°C" + "<br/>"; // 保留两位小数
        });
        return result;
      },
    },
    dataZoom: [
      {
        type: "slider",
        start: 0,
        end: 100,
      },
      {
        type: "inside",
        start: 0,
        end: 100,
      },
    ],
    toolbox: {
      show: true,
      feature: {
        dataZoom: { show: true },
        restore: { show: true },
      },
    },
    legend: {
      data: cities,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: _rawData["北京"].map(function (item) {
        return item.Month;
      }),
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}°C",
      },
    },
    grid: {
      right: 140,
    },
    series: seriesList,
  };

  myLine.setOption(option_line, true);
}

run(MonthlyData);

window.addEventListener("resize", function () {
  myLine.resize();
});
