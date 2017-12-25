$(document).ready(function () {
    $("#vk").mouseenter(function () {
        $("#social").removeClass("fic");
        $("#social").removeClass("gal");
        $("#social").removeClass("inst");
        $("#social").addClass("vk");
        $("#texter").text("VK");
    }),
    $("#fic").mouseenter(function () {
        $("#social").removeClass("vk");
        $("#social").removeClass("gal");
        $("#social").removeClass("inst");
        $("#social").addClass("fic");
        $("#texter").text("Ficbook");
    }),
    $("#gal").mouseenter(function () {
        $("#social").removeClass("vk");
        $("#social").removeClass("fic");
        $("#social").removeClass("inst");
        $("#social").addClass("gal");
        $("#texter").text("Galactikka");
    }),
    $("#inst").mouseenter(function () {
        $("#social").removeClass("vk");
        $("#social").removeClass("fic");
        $("#social").removeClass("gal");
        $("#social").addClass("inst");
        $("#texter").text("Instagram");
    });
});