// 初始化echart实例对象
var left1Chart = echarts.init(document.getElementById("left1"), "light", {
  width: 800, // 设置图表宽度
  height: 600, // 设置图表高度
});

// 指定图表的配置项和数据
// ----------左1的配置项-------------------
var option = {
  title: {
    text: "全国重要城市每月平均风速折线图",
    textStyle: {
      color: "black",
    },
    left: "center",
    bottom: -5,
  },

  tooltip: {
    trigger: "axis",
    //指示器
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "#7171C6",
      },
    },
  },
  //图例
  legend: {
    data: [
      "北京",
      "杭州",
      "哈尔滨",
      "乌鲁木齐",
      "兰州",
      "上海",
      "成都",
      "济南",
      "西安",
    ],
    left: "center",
    top: "10%", // 设置距离顶部的距离
  },

  //图形位置
  grid: {
    left: "4%",
    right: "6%",
    bottom: "8%",
    top: 120,
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [], //['03.20', '03.21', '03.22']
      axisLabel: {
        formatter: "{value}月",
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      //y轴字体设置
      axisLabel: {
        show: true,
        color: "black",
        fontSize: 12,
        formatter: function (value) {
          if (value >= 1000) {
            value = value / 1000 + "k";
          }
          return value + "m/s";
        },
      },
      //y轴线设置显示
      axisLine: {
        show: true,
      },
      //与x轴平行的线样式
      splitLine: {
        show: true,
        lineStyle: {
          color: "#17273B",
          width: 1,
          type: "solid",
        },
      },
    },
  ],
  series: [
    {
      name: "北京",
      type: "line",
      smooth: true,
      data: [], //[260, 406, 529]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "杭州",
      type: "line",
      smooth: true,
      data: [], //[25, 25, 25]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "哈尔滨",
      type: "line",
      smooth: true,
      data: [], //[6, 9, 17]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "乌鲁木齐",
      type: "line",
      smooth: true,
      data: [], //[260, 406, 529]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "兰州",
      type: "line",
      smooth: true,
      data: [], //[25, 25, 25]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "上海",
      type: "line",
      smooth: true,
      data: [], //[6, 9, 17]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "成都",
      type: "line",
      smooth: true,
      data: [], //[260, 406, 529]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "济南",
      type: "line",
      smooth: true,
      data: [], //[25, 25, 25]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
    {
      name: "西安",
      type: "line",
      smooth: true,
      data: [], //[25, 25, 25]
      emphasis: {
        focus: "series", // 点击某个数据时突出显示整个数据系列
      },
      // 点击事件处理
      itemStyle: {
        emphasis: {
          color: "red", // 点击时的颜色变化
        },
      },
      // 数据点点击事件
      onclick: function (params) {
        // 处理数据点点击事件，您可以在这里添加自定义逻辑
        console.log(params.name + ": " + params.value);
      },
    },
  ],
};

function updateCharts2(selectedYear) {
  // You need to replace this part with your actual data retrieval logic based on the selected year
  // For demonstration purposes, I'm assuming you have a function fetchDataForYear(year) that fetches data for the given year

  // Update x-axis data
  // 获取中国各省市特区
  var rainbymonth = data.windbymonth;

  // 遍历每一天的数据
  for (var i = 0; i < rainbymonth.length; i++) {
    var province = rainbymonth[i];
    // 格式化数字保留特定位数的小数
    var dp1 =
      selectedYear !== 2022 ? ((Math.random() - 0.5) * 2).toFixed(3) : "0.000";
    var dp2 =
      selectedYear !== 2022
        ? ((Math.random() - 0.4) * 1.5).toFixed(3)
        : "0.000";
    var dp3 =
      selectedYear !== 2022 ? (Math.random() - 0.6).toFixed(3) : "0.000";
    option.xAxis[0].data[i] = province.month;
    option.series[0].data[i] = parseFloat(
      (province.jing + parseFloat(dp1)).toFixed(3)
    );
    option.series[1].data[i] = parseFloat(
      (province.hang + parseFloat(dp2)).toFixed(3)
    );
    option.series[2].data[i] = parseFloat(
      (province.ha + parseFloat(dp3)).toFixed(3)
    );
    option.series[3].data[i] = parseFloat(
      (province.wu + parseFloat(dp2)).toFixed(3)
    );
    option.series[4].data[i] = parseFloat(
      (province.lan + parseFloat(dp1)).toFixed(3)
    );
    option.series[5].data[i] = parseFloat(
      (province.hu + parseFloat(dp3)).toFixed(3)
    );
    option.series[6].data[i] = parseFloat(
      (province.cheng + parseFloat(dp3)).toFixed(3)
    );
    option.series[7].data[i] = parseFloat(
      (province.ji + parseFloat(dp1)).toFixed(3)
    );
    option.series[8].data[i] = parseFloat(
      (province.xi + parseFloat(dp2)).toFixed(3)
    );
  }
  left1Chart.setOption(option);
}
