// Define a global variable to store the selected year
selectedYear = 2022 ;
selectedYear1 = 2020 ;
// Set default value to 2023
$("#selected-year").text("2022");
$("#year-input").val("2022");

$("#selected-year1").text("2020");
$("#year-input1").val("2020");

updateCharts1(selectedYear);
updateCharts2(selectedYear); 
updateCharts_line(selectedYear1); 

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
        updateCharts1(selectedYear); 
        updateCharts2(selectedYear);
       
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
$("#year-button1").click(function() {
    $("#year-list1").empty(); // 清空
    for (let year = 2013; year <= 2020; year++) {
        $("#year-list1").append("<li>" + year + "</li>");
    }
    // 选中 放入框
    $("#year-list1 li").click(function() {
        selectedYear1 = parseInt($(this).text());
        $("#selected-year1").text(selectedYear1+"年");
        $("#year-input1").val($(this).text());
        updateCharts_line(selectedYear1); 
       
    });
    // 显示
    $("#year-list1").show();
});

$(document).click(function(event) {
    if (!$(event.target).closest("#year-button1").length) {
        $("#year-list1").hide();
    }
});

