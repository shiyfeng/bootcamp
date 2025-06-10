$(document).ready(function () {
    $("#input").validate({
        rules:{
            username:{
                required: true,
                minlength: 2,
                maxlength: 10
            },
            password: {
                required: true,
                minlength: 2,
                maxlength: 16
            }
        },
        messages:{
            username:{
                required: "请填写用户名",
                minlength: "用户名至少需要2位",
                maxlength: "用户名最大不能超过10位"
            },
            password: {
                required: "请填写密码",
                minlength: "密码最小为2位",
                maxlength: "密码最大为16位"
            }
        }
    });
});