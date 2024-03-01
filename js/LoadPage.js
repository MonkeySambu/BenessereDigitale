$(document).ready( () => {
    $("#header").load("navbar.html", function () {
        $("#HOME").click(() => {
            $("#main").empty(); // svuoto il div principale
            $("#main").load("home.html");
        });
        $("#DATI").click(() => {
            $("#main").empty();
            $("#main").load("dati.html");
        });

        
    });
    $("#main").load("home.html");
    $("#footer").load("footer.html");
    
});