// Define a global variable to store the selected year
selectedYear = 2022 ;
selectedprovince = "北京";
$("#selected-province").text("北京");
$("#province-input").val("北京");
// Set default value to 2023
$("#selected-year").text("2022");
$("#year-input").val("2022");
updateCharts(selectedYear);
updateCharts3(selectedYear); 
updateCharts2(selectedYear,selectedprovince); 
updateCharts4(selectedYear,selectedprovince);

//点按钮显示列表
$("#year-button").click(function() {
    $("#year-list").empty(); // 清空
    for (let year = 2013; year <= 2022; year++) {
        $("#year-list").append("<li>" + year + "</li>");
    }
    // 选中 放入框
    $("#year-list li").click(function() {
        selectedYear = parseInt($(this).text());
        $("#selected-year").text(selectedYear+"年");
        $("#year-input").val($(this).text());
        updateCharts(selectedYear); 
        updateCharts2(selectedYear,selectedprovince); 
        updateCharts3(selectedYear);
        updateCharts4(selectedYear,selectedprovince);
    });
    // 显示
    $("#year-list").show();
});

$(document).click(function(event) {
    if (!$(event.target).closest("#year-button").length) {
        $("#year-list").hide();
    }
});

//点按钮显示列表
$("#province-button").click(function() {
    $("#province-list").empty(); // 清空
    for (var province of data.areaTree[0].mapaqi) {
        $("#province-list").append("<li>" + province.name + "</li>");
    }
    // 选中 放入框
    $("#province-list li").click(function() {
        selectedprovince = $(this).text();
        $("#selected-province").text(selectedprovince);
        $("#province-input").val($(this).text());
        updateCharts2(selectedYear,selectedprovince); 
        updateCharts4(selectedYear,selectedprovince); 
    });
    // 显示
    $("#province-list").show();
});

$(document).click(function(event) {
    if (!$(event.target).closest("#province-button").length) {
        $("#province-list").hide();
    }
});

