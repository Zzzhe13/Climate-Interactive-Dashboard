// 初始化echart实例对象
var myChart = echarts.init(document.getElementById('center'), 'light', {
    width: 800,  // 设置图表宽度
    height: 550  // 设置图表高度
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
        text: '全国各省年降水量(毫升)',
        textStyle: {
            color: 'black',
            fontStyle: 'normal',

        },
        left: 'center',
        bottom: 0

    },
    tooltip: {
        trigger: 'item'
    },
    visualMap: { // 左侧小导航图标
        show: true,
        x: 50,
        y: 'bottom',
        textStyle: {
            color: 'black',
            fontSize: 8,
        },
        splitList: [{
                start: 1,
                end: 199
            },
            {
                start: 200,
                end: 499
            },
            {
                start: 500,
                end: 899
            },
            {
                start: 900,
                end: 1499
            },
            {
                start: 1500
            }
        ],
        color: ["#001F3F", "#0074D9", "#7FDBFF", "#AEDFF7", "#DDF2FF"]

    },
    series: [{
        name: '年平均降水量',
        type: 'map',
        mapType: 'china',
        roam: false, // 禁用拖动和缩放
        itemStyle: { // 图形样式
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { // 鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: { // 图形上的文本标签
            normal: {
                show: true, //省份名称
                fontSize: 8,
            },
            emphasis: {
                show: true,
                color: 'black',
                fontSize: 8,
            }
        },
        data: [] /*{'name': '上海','value': 318}, {'name': '云南','value': 162}*/
    }]
};


//直辖市和特别行政区-只有二级地图，没有三级地图
var special = ["北京","天津","上海","重庆","香港","澳门"];
var mapdata = [];
// 获取中国各省市特区
var provinces = data.areaTree[0].rainfall
var shandongrain = {
     "德州市":  500,
     "聊城市":  550,
     "菏泽市":  800,
     "济南市":  500,
     "泰安市":  600,
     "济宁市":  1439,
     "枣庄市":  1124,
     "临沂市":  600,
     "日照市":  520, 
     "青岛市":  600, 
     "莱芜市":  300, 
     "淄博市":  200,
     "滨州市":  154,
     "东营市":  400, 
     "潍坊市":  220,
     "烟台市":  380, 
     "威海市":  710, 
}
var qingdaorain = {
    "平度市":  500,
    "莱西市":  550,
    "即墨市":  800,
    "崂山区":  500,
    "李沧区":  600,
    "城阳区":  1439,
    "四方区":  1124,
    "市北区":  600,
    "市南区":  520, 
    "黄岛区":  600, 
    "胶南市":  300, 
    "胶州市":  200,

}

// 遍历每一个省自治区、直辖市 {"name": "黑龙江", "total": 500, "avg": 5925.346},
for (var province of provinces) {
    // 将每个省的累计确诊病例数添加到配置项的data中
    option.series[0].data.push({
        'name': province.name,
        'value': province.total
    })
    mapdata.push({
        'name': province.name,
        'value': province.total
    })
}


var provinces = {
    //23个省
    "台湾": "taiwan",
    "河北": "hebei",
    "山西": "shanxi",
    "辽宁": "liaoning",
    "吉林": "jilin",
    "黑龙江": "heilongjiang",
    "江苏": "jiangsu",
    "浙江": "zhejiang",
    "安徽": "anhui",
    "福建": "fujian",
    "江西": "jiangxi",
    "山东": "shandong",
    "河南": "henan",
    "湖北": "hubei",
    "湖南": "hunan",
    "广东": "guangdong",
    "海南": "hainan",
    "四川": "sichuan",
    "贵州": "guizhou",
    "云南": "yunnan",
    "陕西": "shanxi1",
    "甘肃": "gansu",
    "青海": "qinghai",
    //5个自治区
    "新疆": "xinjiang",
    "广西": "guangxi",
    "内蒙古": "neimenggu",
    "宁夏": "ningxia",
    "西藏": "xizang",
    //4个直辖市
    "北京": "beijing",
    "天津": "tianjin",
    "上海": "shanghai",
    "重庆": "chongqing",
    //2个特别行政区
    "香港": "xianggang",
    "澳门": "aomen"
};



//地图点击事件
myChart.on('click', function (params) {
	console.log( params );
	if( params.name in provinces ){
		//D:\sdu作业\可视化\大作业\vis\scripts\rainfall\map\province
		$.getJSON('../scripts/rainfall/map/province/'+ provinces[params.name] +'.json', function(data){
			echarts.registerMap( params.name, data);
			var d = [];
			for( var i=0;i<data.features.length;i++ ){
				d.push({
                    'name': data.features[i].properties.name,
                    'value': shandongrain[data.features[i].properties.name]
				})
			}
			renderMap(params.name,d);
		});
	}else if( params.seriesName in provinces ){
		//如果是【直辖市/特别行政区】只有二级下钻
		if(  special.indexOf( params.seriesName ) >=0  ){
			renderMap('china',mapdata);
		}else{
			//显示县级地图
			$.getJSON('../scripts/rainfall/map/city/'+ cityMap[params.name] +'.json', function(data){
				echarts.registerMap( params.name, data);
				var d = [];
				for( var i=0;i<data.features.length;i++ ){
                    d.push({
                        'name': data.features[i].properties.name,
                        'value': qingdaorain[data.features[i].properties.name]
                    })
				}
				renderMap(params.name,d);
			});	
		}	
	}else{
		renderMap('china',mapdata);
	}
});
myChart.setOption(option);

function renderMap(map,data){
	option.title.subtext = map;
    option.tooltip={
        trigger: 'item'
    },
    option.series = [ 
		{
            name: map,
            type: 'map',
            mapType: map,
            roam: false,
            nameMap:{
			    'china':'中国'
			},
            itemStyle: { // 图形样式
                normal: {
                    borderWidth: .5, //区域边框宽度
                    borderColor: '#009fe8', //区域边框颜色
                    areaColor: "#ffefd5", //区域颜色
                },
                emphasis: { // 鼠标滑过地图高亮的相关设置
                    borderWidth: .5,
                    borderColor: '#4b0082',
                    areaColor: "#fff",
                }
            },
            label: { // 图形上的文本标签
                normal: {
                    show: true, //省份名称
                    fontSize: 8,
                },
                emphasis: {
                    show: true,
                    fontSize: 8,
                }
            },
            data:data
        }	

    ];
    //渲染地图
    myChart.setOption(option);
}
