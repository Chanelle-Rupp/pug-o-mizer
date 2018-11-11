$(document).ready(function () {
    randomImage();

    function randomImage() {
        
        var url = "https://dog.ceo/api/breed/pug/images/random";
        $.getJSON(url, function (data) {
            $(".picture").html(`<img src="${data.message}">`).fadeout;
            
        });
    };
    

    $("#btn").on("click", function () {
        randomImage();
    });
});