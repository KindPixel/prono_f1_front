const not_logged_div = $('#not_logged');

if (sessionStorage.getItem('nickname') === null) {
    not_logged_div.show();
}