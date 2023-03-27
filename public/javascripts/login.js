const submit_login = $("#submit_login")

submit_login.on("click", function () {
    
        var email = $("#input_email").val()
        var password = $("#input_password").val()
    
        $.ajax({
            type: "POST",
            url: "http://25.30.168.195:7777/f1/api/v1/users/login",
            data: {
                email,
                password
            },
            dataType: "json",
            complete: function (res) {
                if (res.status == 200) {
                    sessionStorage.setItem("nickname", res.responseJSON.name)
                    sessionStorage.setItem("email", res.responseJSON.email)
                    sessionStorage.setItem("points", res.responseJSON.points)
                    showPersistentNotification("info", "Logged in")
                    window.location.href = "ranking"
                } else if (res.status == 400) {
                    showPersistentNotification("error", res.responseJSON.error)
                } else {
                    showPersistentNotification("error", res.responseJSON.error)
                }
            }
        });
})