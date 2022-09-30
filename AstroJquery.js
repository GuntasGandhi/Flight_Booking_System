$(document).ready(function () {
    $("#tablesubmitbtn").click(function () {
        var namefield = $("#name1").val();
        var emailfield = $("#email1").val();

        if (namefield.length === 0 && emailfield.length === 0) {
            $("#infoname").css({ "color": "red", "font-size": "20px", "font-weight": "bold" });
            $("#infoname").text("Enter your name and email!");
        }

        else if (namefield.length != 0 && emailfield.length != 0) {
            $("#infoname").remove();
            $("#successinfo").css({ "color": "white", "font-weight": "bold" });
            $("#successinfo").text("Emailed Successfully!");
        }
    })


})