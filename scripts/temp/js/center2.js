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
var option = {
  title: {
    text: "全国各省年气温(摄氏度)",
    textStyle: {
      color: "black",
      fontStyle: "normal",
    },
    left: "center",
    bottom: 0,
  },
  tooltip: {
    trigger: "item",
    formatter: function (params) {
      if (typeof params.value === "number") {
        return params.name + " : " + params.value.toFixed(2) + "℃";
      }
    },
  },
  grid: {
    left: "80%",
    right: "6%",
    bottom: "8%",
    top: 120,
    containLabel: true,
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
        start: -5,
        end: 0,
      },
      {
        start: 0,
        end: 5,
      },
      {
        start: 5,
        end: 10,
      },
      {
        start: 10,
        end: 15,
      },
      {
        start: 15,
      },
    ],
    color: ["#FF0000", "#FF3000", "#FF6700", "#FF9000", "#FFCCCC"],
  },
  series: [
    {
      name: "年平均温度",
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

// 获取中国各省市特区
var provinces = data.areaTree[0].temperature;
console.log(provinces);
// 遍历每一个省自治区、直辖市 {"name": "黑龙江", "total": 500, "avg": 5925.346},
for (var province of provinces) {
  // 将每个省的累计确诊病例数添加到配置项的data中
  option.series[0].data.push({
    name: province.name,
    value: province.avg,
  });
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
