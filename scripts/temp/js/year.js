// Define a global variable to store the selected year
selectedYear = 2022 ;
selectedprovince = "北京";
$("#selected-province").text("北京");
$("#province-input").val("北京");
// Set default value to 2023
$("#selected-year").text("2022");
$("#year-input").val("2022");
updateCharts(selectedYear);
var change=0

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
        update_ori(selectedYear)
        update_line(selectedYear)
    });
    // 显示
    $("#year-list").show();
});

$(document).click(function(event) {
    if (!$(event.target).closest("#year-button").length) {
        $("#year-list").hide();
    }
    change=0;
});