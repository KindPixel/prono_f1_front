console.log("navbar.js loaded");

const register_link = $(".register_link")
const user_link = $(".user_link")

if (sessionStorage.getItem("session") == null) {
    register_link.show()
    user_link.hide()
} else {
    register_link.hide()
    user_link.show()
}