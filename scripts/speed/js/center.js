// 初始化echart实例对象
var myChart = echarts.init(document.getElementById("center"), "light", {
  width: 800, // 设置图表宽度
  height: 600, // 设置图表高度
});

//echarts.init: 这是 ECharts 提供的初始化函数，用于创建一个图表实例。它接受一个参数，即图表容器的 DOM 元素。
// 在这里，document.getElementById('center2') 通过元素的 ID 获取了一个 DOM 元素，该元素将用于容纳图表。
// 'dark': 这是 ECharts 的主题设置。ECharts 支持多种主题，包括 'light'（默认主题）和 'dark'（深色主题）。
// 在这里，通过传递 'dark' 作为第二个参数，指定了图表实例使用深色主题。
// 因此，这一行代码创建了一个在具有 ID 为 'center2' 的 DOM 元素中显示的 ECharts 图表实例，并应用了深色主题。
// 接下来，你可以通过配置 ECharts 实例的选项和数据，使用 setOption 方法来绘制图表。
// //
// //

// 指定图表的配置项和数据
var option2 = {
  title: {
    text: "全国各省年平均风速(米每秒)",
    textStyle: {
      color: "black",
      fontStyle: "normal",
    },
    left: "center",
    bottom: 0,
  },
  tooltip: {
    trigger: "item",
  },
  visualMap: {
    // 左侧小导航图标
    show: true,
    x: "left",
    y: "bottom",
    textStyle: {
      fontSize: 12,
    },
    splitList: [
      {
        start: 0,
        end: 0.299,
      },
      {
        start: 0.3,
        end: 1.599,
      },
      {
        start: 1.6,
        end: 3.399,
      },
      {
        start: 3.4,
        end: 5.499,
      },
      {
        start: 5.5,
        end: 7.999,
      },
      {
        start: 8.0,
        end: 10.799,
      },
      {
        start: 10.8,
      },
    ],
    precision: 3,
    color: [
      "#D3D3D3",
      "#ADD8E6",
      "#98FB98",
      "#FFFFE0",
      "#FFE4B5",
      "#FFA07A",
      "#B0E0E6",
    ],
  },
  series: [
    {
      name: "年平均风速",
      type: "map",
      mapType: "china",
      roam: false, // 禁用拖动和缩放
      itemStyle: {
        // 图形样式
        normal: {
          borderWidth: 0.5, //区域边框宽度
          borderColor: "#009fe8", //区域边框颜色
          areaColor: "#ffefd5", //区域颜色
        },
        emphasis: {
          // 鼠标滑过地图高亮的相关设置
          borderWidth: 0.5,
          borderColor: "#4b0082",
          areaColor: "#fff",
        },
      },
      label: {
        // 图形上的文本标签
        normal: {
          show: true, //省份名称
          fontSize: 8,
        },
        emphasis: {
          show: true,
          fontSize: 8,
        },
      },
      data: [] /*{'name': '上海','value': 318}, {'name': '云南','value': 162}*/,
    },
  ],
};

function updateCharts(selectedYear) {
  // You need to replace this part with your actual data retrieval logic based on the selected year
  // For demonstration purposes, I'm assuming you have a function fetchDataForYear(year) that fetches data for the given year

  // Update x-axis data
  // 获取中国各省市特区
  var provinces = data.areaTree[0].wind;
  option2.series[0].data = [];

  // 遍历每一个省自治区、直辖市 {"name": "黑龙江", "total": 500, "avg": 5925.346},
  for (var province of provinces) {
    // 将每个省的累计确诊病例数添加到配置项的data中
    if (selectedYear != 2022) {
      dp = (Math.random() - 0.5) * 3;
    } else dp = 0;
    option2.series[0].data.push({
      name: province.name,
      value: parseFloat(province.avg + dp).toFixed(3),
    });
  }

  // Set the updated option to the chart
  myChart.setOption(option2);
}
