




$(document).ready(function () {

    let animated = false;

    $("#button").click(function () {

        if (animated) {
            let calc = window.innerWidth / 2 - 100;
            $('#square').animate({ marginLeft: '0px' });
            animated = false;

        }
        else {
            let calc = window.innerWidth / 2 - 100;
            $('#square').animate({ marginLeft: calc + "px" });
            animated = true;
        }



    });


})