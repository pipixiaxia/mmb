// 产品分页模块 - 慢慢买比价网

$(function () {
    // 点击下拉
    $("#list_1").on("click", ".dropdown", function () {
        $(this).children(".dropdown-menu").fadeIn(1000);
        $(this).stop(true, false).animate({ "margin-bottom": "140px" }, 800, function () {
            // 给标签添加标志，
            // 改变小箭头指向
            $(this).attr("flag", "true").find(".jiantou").html("&#xe501;");
        });
        // 链式编程
    }).on("click", ".dropdown", function () {
        if ($(this).attr("flag") == "true") {
            $(this).children(".dropdown-menu").fadeOut(600);
            $(this).stop(true, false).animate({ "margin-bottom": "0px" }, 800, function () {
                $(this).attr("flag", "false").find(".jiantou").html("&#xf0170;");
            });
        }
    })
});