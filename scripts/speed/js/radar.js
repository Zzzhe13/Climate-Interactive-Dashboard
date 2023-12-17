// 初始化echart实例对象
var radarChart = echarts.init(document.getElementById("radar"), "light", {
  width: 800, // 设置图表宽度
  height: 600, // 设置图表高度
});

function updateCharts3(selectedYear) {
  if (selectedYear != 2022) {
    dp = (Math.random() - 0.5) * 2.3;
    dk = (Math.random() - 0.2) * 1.5;
    dp1 = (Math.random() - 0.5) * 1.5;
    dk1 = (Math.random() - 0.5) * 1.3;
    dp2 = (Math.random() - 0.6) * 1.3;
    dk2 = (Math.random() - 0.6) * 1.5;
    dp3 = (Math.random() - 0.4) * 1.4;
    dk3 = (Math.random() - 0.5) * 1.7;
    dp4 = (Math.random() - 0.7) * 1.6;
    dk4 = (Math.random() - 0.6) * 1.5;
    dp5 = (Math.random() - 0.3) * 1.9;
    dk5 = (Math.random() - 0.4) * 1.8;
    dp6 = (Math.random() - 0.6) * 2.0;
    dk6 = (Math.random() - 0.5) * 2.0;
    dp7 = Math.random() * 1.8;
    dk7 = Math.random() * 1.6;
  } else {
    dp = 0;
    dk = 0;
    dp1 = 0;
    dk1 = 0;
    dp2 = 0;
    dk2 = 0;
    dp3 = 0;
    dk3 = 0;
    dp4 = 0;
    dk4 = 0;
    dp5 = 0;
    dk5 = 0;
    dp6 = 0;
    dk6 = 0;
    dp7 = 0;
    dk7 = 0;
  }
  var option6 = {
    title: {
      text: selectedYear + "年全国重要省份的年最高风速、最低风速雷达图",
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
    legend: {
      data: ["最低风速", "最高风速"],
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "甘肃", max: 11.0, color: "#000000" },
        { name: "北京", max: 11.0, color: "#000000" },
        { name: "上海", max: 11.0, color: "#000000" },
        { name: "重庆", max: 11.0, color: "#000000" },
        { name: "山东", max: 11.0, color: "#000000" },
        { name: "湖南", max: 11.0, color: "#000000" },
        { name: "广东", max: 11.0, color: "#000000" },
        { name: "四川", max: 11.0, color: "#000000" },
      ],
    },
    series: {
      type: "radar",
      data: [
        {
          value: [
            parseFloat(4.750113 + dp).toFixed(3),
            parseFloat(6.971043 + dp1).toFixed(3),
            parseFloat(9.251902 + dp2).toFixed(3),
            parseFloat(4.434208 + dp3).toFixed(3),
            parseFloat(6.717524 + dp4).toFixed(3),
            parseFloat(5.521989 + dp5).toFixed(3),
            parseFloat(7.186358 + dp6).toFixed(3),
            parseFloat(4.556746 + dp7).toFixed(3),
          ],
          name: "最高风速",
          emphasis: {
            focus: "self", // 点击某个数据时只显示该数据的数值
          },
        },
        {
          value: [
            parseFloat(3.095651 + dk).toFixed(3),
            parseFloat(3.766584 + dk1).toFixed(3),
            parseFloat(5.851924 + dk2).toFixed(3),
            parseFloat(2.84389 + dk3).toFixed(3),
            parseFloat(4.602311 + dk4).toFixed(3),
            parseFloat(3.999723 + dk5).toFixed(3),
            parseFloat(4.684489 + dk6).toFixed(3),
            parseFloat(2.614878 + dk7).toFixed(3),
          ],
          name: "最低风速",
          emphasis: {
            focus: "self", // 点击某个数据时只显示该数据的数值
          },
        },
      ],
    },
  };
  radarChart.setOption(option6);
}
