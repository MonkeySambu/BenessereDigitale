var Cookies = Cookies.noConflict();
if (Cookies.get('nome') === undefined) {
    $("#main").load("home.html");
}