/*/////

console.log("Updating charts for year:", selectedYear);


*//////

var data = {
    "lastUpdateTime": "2020-04-04 17:05:52",
    "chinaTotal": {
        "confirm": 82892,
        /*累计确诊确诊*/
        "heal": 76992,
        /*累计治愈*/
        "dead": 3335,
        "nowConfirm": 2565,
        "suspect": 114,
        "nowSevere": 331,
        "importedCase": 890,
        "noInfect": 1030
    },
    "chinaAdd": {
        "confirm": 90,
        "heal": 207,
        "dead": 4,
        "nowConfirm": -121,
        "suspect": -21,
        "nowSevere": -48,
        "importedCase": 20,
        "noInfect": 64
    },
    "isShowAdd": true,
    "showAddSwitch": {
        "all": true,
        "confirm": true,
        "suspect": true,
        "dead": true,
        "heal": true,
        "nowConfirm": true,
        "nowSevere": true,
        "importedCase": true,
        "noInfect": true
    },
    "areaTree": [{
        "name": "中国",
        "today": {
            "confirm": 90,
            "isUpdated": true
        },
        "total": {
            "nowConfirm": 2565,
            "confirm": 82892,
            "suspect": 114,
            "dead": 3335,
            "deadRate": "4.02",
            "showRate": false,
            "heal": 76992,
            "healRate": "92.88",
            "showHeal": true
        },
        "temperature":[
            {"name": "黑龙江", "total": 500, "avg": 2.71},
            {"name": "吉林", "total": 550, "avg": 5.03},
            {"name": "辽宁", "total": 800, "avg": 8.3},
            {"name": "北京", "total": 500, "avg": 10.67},
            {"name": "天津", "total": 600, "avg": 13.11},
            {"name": "重庆", "total": 1439, "avg": 16.22},
            {"name": "上海", "total": 1124, "avg": 17.2},
            {"name": "河北", "total": 600, "avg": 9.97},
            {"name": "山西", "total": 520, "avg": 9.41},
            {"name": "陕西", "total": 600, "avg": 11.61},
            {"name": "甘肃", "total": 300, "avg": 6.78},
            {"name": "宁夏", "total": 200, "avg": 9.81},
            {"name": "新疆", "total": 154, "avg":6.8},
            {"name": "西藏", "total": 400, "avg":-2.94},
            {"name": "内蒙古", "total": 220, "avg": 5.09},
            {"name": "青海", "total": 380, "avg": -1.47},
            {"name": "山东", "total": 710, "avg": 14.07},
            {"name": "河南", "total": 700, "avg": 15.69},
            {"name": "江苏", "total": 1000, "avg": 16.3},
            {"name": "浙江", "total": 1400, "avg": 17},
            {"name": "安徽", "total": 1200, "avg": 16.69},
            {"name": "湖南", "total": 1501, "avg": 17.59},
            {"name": "湖北", "total": 1200, "avg": 16.15},
            {"name": "江西", "total": 1600, "avg": 18.52},
            {"name": "广西", "total": 1600, "avg": 19.67},
            {"name": "广东", "total": 1800, "avg": 20.89},
            {"name": "福建", "total": 1600, "avg": 18.57},
            {"name": "云南", "total": 1100, "avg": 14.85},
            {"name": "贵州", "total": 1200, "avg": 15.08},
            {"name": "四川", "total": 1100, "avg": 7.54},
            {"name": "海南", "total": 1639, "avg": 23.82},
            {"name": "台湾", "total": 2200, "avg": 19.67},
            {"name": "香港", "total": 2214, "avg": 22.39},
            {"name": "澳门", "total": 2200, "avg": 12}
        ],        
        
    }],
    "rainbymonth":[
        {"month": 1, "jing":2.7 , "hang": 80.6, "ha": 4.2, "wu":10.4 , "gang":24.7 , "hu": 20.4 ,"cheng":8.9,"ji":1.8, "xi":6.9},
        {"month": 2, "jing": 5.0, "hang":  88.2, "ha":4.9, "wu":10.0 , "gang":54.4 , "hu":  60.6,"cheng":12.9,"ji":	6.3, "xi":9.6},
        {"month": 3, "jing":10.2 , "hang":140.7, "ha":11.9 , "wu": 18.5, "gang": 82.2, "hu": 76.2 ,"cheng":22.4,"ji":10.3, "xi":28.6},
        {"month": 4, "jing":23.1 , "hang":123.1, "ha":20.1 , "wu":32.8 , "gang":174.7 , "hu": 44.9 ,"cheng":47.6,"ji":26.7, "xi":43.0},
        {"month": 5, "jing":39.0 , "hang":128.6, "ha":39.3 , "wu":36.2, "gang": 304.7, "hu":  151.8,"cheng":76.9,"ji":49.1, "xi":60.2},
        {"month": 6, "jing":76.7 , "hang":  219.4, "ha":88.2 , "wu":30.4 , "gang":456.1 , "hu":  77.5,"cheng":114.3,"ji":78.9, "xi":54.4},
        {"month": 7, "jing":168.8 , "hang": 172.9, "ha":147.8 , "wu": 23.3, "gang":376.5 , "hu": 314.2,"cheng":208.1,"ji":153.9, "xi": 98.6},
        {"month": 8, "jing":120.2 , "hang":  162.1, "ha": 122.6, "wu": 26.2, "gang":432.2 , "hu": 336.4,"cheng":197.2,"ji":130.0, "xi":70.8},
        {"month": 9, "jing": 57.4, "hang":123.5 , "ha":56.3 , "wu":26.3 , "gang":327.6 , "hu": 165.9 ,"cheng":111.0,"ji":57.2, "xi":91.6},
        {"month": 10, "jing": 24.1, "hang": 78.5, "ha":23.0, "wu":26.3 , "gang":100.9 , "hu": 64.6 ,"cheng":35.5,"ji":27.3, "xi":59.9},
        {"month": 11, "jing":13.1, "hang":  71.5, "ha":12.7 , "wu":19.1 , "gang":37.6 , "hu": 72.7,"cheng":14.8,"ji":13.7, "xi":23.9},
        {"month": 12, "jing": 2.4, "hang":48.9 , "ha":6.9 , "wu": 14.6, "gang":26.8 , "hu":  3.0,"cheng":6.1,"ji":	4.2, "xi":5.8},
    ],
    "dailyNewAddHistory": [],
    "dailyHistory": [],
    "wuhanDayList": [],
    "articleList": []
}
