const submit_register = $("#submit_register")

submit_register.on("click", function () {

    var email = $("#input_email").val()
    var password = $("#input_password").val()
    var password_conf = $("#input_password_conf").val()
    var nickname = $("#input_nickname").val()

    console.log(typeof password_conf)

    //check if fields are empty
    if (email == "" || password == "" || password_conf == "" || nickname == "") {
        toastr.error('All fields are required');
        return;
    }

    if (password != password_conf) {
        toastr.error('Passwords do not match');
        return;
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:7777/f1/api/v1/users/register",
        data: {
            email,
            password,
            password_conf,
            nickname
        },
        dataType: "json",
        complete: function (response) {
            if (response.status == 200) {
                showPersistentNotification("info", "Registered")
                window.location.href = "login"
            } else if (response.status == 400) {
                showPersistentNotification("error", response.responseJSON.error)
            }
        }
    });

})