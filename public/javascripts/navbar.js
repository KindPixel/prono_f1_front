const register_link = $(".register_link")
const user_link = $(".user_link")
const not_logged_nav = $("#not_logged_nav")
const logged_nav = $("#logged_nav")
const display_nickname = $("#display_nickname")

if (sessionStorage.getItem("nickname") == null) {



    register_link.show()
    user_link.hide()



} else {



    register_link.hide()
    user_link.show()
    not_logged_nav.hide()
    logged_nav.show()



}

display_nickname.text(sessionStorage.getItem("nickname"))



// NAVBAR ACTIVE LINK
const url = window.location.href

if (url.includes("ranking")) {
    $(".nav-link-ranking").addClass("active")
} else if (url.includes("bets")) {
    $(".nav-link-bets").addClass("active")
} else if (url.includes("register")) {
    $(".nav-link-register").addClass("active")
} else if (url.includes("login")) {
    $(".nav-link-login").addClass("active")
}

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

function showPersistentNotification(type, msg) {
    // Configuration de Toastr
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    if (type == "info") {
        toastr.info(msg);
    }
    else if (type == "error") {
        toastr.error(msg);
    }

    localStorage.setItem("notification", "true");
    localStorage.setItem("notification_type", type);
    localStorage.setItem("notification_msg", msg);
};

toastr.options.onHidden = function () {
    // Supprimez l'état de la notification du stockage local
    localStorage.removeItem('notification');
    localStorage.removeItem('notification_type');
    localStorage.removeItem('notification_msg');
};

// Vérifiez si la notification persistante doit être affichée
if (localStorage.getItem('notification') === 'true') {

    // Récupérez les données de la notification du stockage local
    var type = localStorage.getItem('notification_type');
    var msg = localStorage.getItem('notification_msg');
    if (type == "info") {
        toastr.info(msg);
    }
    else if (type == "error") {
        toastr.error(msg);
    }
}

$("#disconnect_btn").on("click", function () {
    sessionStorage.clear()
    window.location.href = "ranking"
})

