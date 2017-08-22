$(function () {
    $(ajax({
        url: "http://139.199.192.48:9090/api/getcategorytitle",
        type: "post",
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err);
        }
    }));
});