$(document).ready(function($) {
    $(".navbar li a").on("click", function(e) {
        e.preventDefault();

        $("body, html").animate({
            scrollTop: $("#"+this.href.split('#')[1]).offset().top
        }, 600);

    });
});

$(function() {
    var terms = ['Health Startups are Concieved', 'Founders & Medicos Connect', 'Industry Secrects are Revealed'];

    function rotateTerm() {
        var ct = $("#what").data("term") || 0;
        $("#what").data("term", ct == terms.length - 1 ? 0 : ct + 1).text(terms[ct])
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(1000, rotateTerm);
    }
    $(rotateTerm);
});