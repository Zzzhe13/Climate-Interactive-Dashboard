// Define a global variable to store the selected year
selectedYear = 2022;

$("#selected-year").text("2022");
$("#year-input").val("2022");
updateCharts3(selectedYear);
updateCharts2(selectedYear);
updateCharts(selectedYear);

//点按钮显示列表
$("#year-button").click(function () {
  $("#year-list").empty(); // 清空
  for (let year = 2013; year <= 2022; year++) {
    $("#year-list").append("<li>" + year + "</li>");
  }
  // 选中 放入框
  $("#year-list li").click(function () {
    selectedYear = parseInt($(this).text());
    $("#selected-year").text(selectedYear);
    $("#year-input").val($(this).text());
    updateCharts3(selectedYear);
    updateCharts2(selectedYear);
    updateCharts(selectedYear);
  });
  // 显示
  $("#year-list").show();
});

$(document).click(function (event) {
  if (!$(event.target).closest("#year-button").length) {
    $("#year-list").hide();
  }
});
