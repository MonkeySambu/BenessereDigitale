$(document).ready( () => {
    $("#header").load("navbar.html", function () {

        if (Cookies.get('nome') != undefined) {

            $("#HOME").addClass("active");
            $("#DATI").removeClass("active");
            $("#CHART").removeClass("active");
            $("#INSERIMENTO").removeClass("active");
            $("#CONFRONTO").removeClass("active");

            $("#HOME").click(() => {
                $("#main").empty(); // svuoto il div principale
                $("#main").load("home.html");

                $("#HOME").addClass("active");
                $("#DATI").removeClass("active");
                $("#CHART").removeClass("active");
                $("#INSERIMENTO").removeClass("active");
                $("#CONFRONTO").removeClass("active");

            });
            $("#DATI").click(() => {
                $("#main").empty();
                $("#main").load("dati.html",()=>{ grafici()});

                $("#HOME").removeClass("active");
                $("#DATI").addClass("active");
                $("#CHART").removeClass("active");
                $("#INSERIMENTO").removeClass("active");
                $("#CONFRONTO").removeClass("active");
            });
            $("#CHART").click(() => {
                $("#main").empty();
                $("#main").load("grafici.html",()=>{ graficoSettimana() });

                $("#HOME").removeClass("active");
                $("#DATI").removeClass("active");
                $("#CHART").addClass("active");
                $("#INSERIMENTO").removeClass("active");
                $("#CONFRONTO").removeClass("active");

            });
            $("#INSERIMENTO").click(() => {
                $("#main").empty();
                $("#main").load("inserimento&confronto.html",()=>{ preparazione() });

                $("#HOME").removeClass("active");
                $("#DATI").removeClass("active");
                $("#CHART").removeClass("active");
                $("#INSERIMENTO").addClass("active");
                $("#CONFRONTO").removeClass("active");

            });
            $("#LOGOUT").click(() => {
                Cookies.remove('nome');
                for (let i = 0; i < 7; i++) {
                    Cookies.remove('app' + i);
                    Cookies.remove("t"+i);
                }
                $("#main").empty();
                $("#main").load("home.html");

                $("#HOME").removeClass("active");
                $("#DATI").removeClass("active");
                $("#CHART").removeClass("active");
                $("#INSERIMENTO").removeClass("active");
                $("#CONFRONTO").removeClass("active");
            });
        }         
    });
    $("#main").load("home.html");

    $("#footer").load("footer.html");
    
});