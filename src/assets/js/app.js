$(document).foundation();


var closeModalButton= $("#modalClose");


//for use on projects page
closeModalButton.click(function (){
    $("#viewThis").fadeOut(3000);
});


//For use on contact page
$(document).on("submit", function(env)
{
    env.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var email = $("input#email").val();
    var organization = $("input#organization").val() ? $("input#organization").val() : "Unspecified";
    var message = $("textarea#message").val() ? $("textarea#message").val() : "Unspecified";
    var name = firstName + " " + lastName;
    var data = 'name=' + name + '&email=' + email + '&organization=' + organization + '&message=' + message;


    $.ajax({
        type: "POST",
        url: "../assets/php/mail.php",
        data: data,
        success: function() {
            $("#formResult").html("<p>Thanks " + firstName + "!</p><p>I will contact you soon</p>")
                .addClass("success")
                .fadeIn(1500)
                .show();
        },
        error: function() {
            $("#formResult").html("<p>Error sending email, please send message manually to ferriercory@gmail.com")
                .addClass("alert")
                .fadeIn(1500)
                .show();
        }
    });
});