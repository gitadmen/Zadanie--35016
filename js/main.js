




$(document).ready(function () {

    let animated = false;

    $("#button").click(function () {

        if (animated) {
            let calc = window.innerWidth / 2 - 100;
            $('#square').animate(
                {
                    marginLeft: '0px',
                    height: '200px',
                    width: '200px',
                    backgroundColor: "#aa0000",
                },

                {
                    duration: 1000,
                }

            );

            animated = false;

        }
        else {
            let calc = window.innerWidth / 2 - 50;
            $('#square').animate(

                {
                    marginLeft: calc + "px",
                    height: '100px',
                    width: '100px',
                    backgroundColor: "#aa0000"
                },

                {
                    duration: 1000,
                }

            );
            animated = true;
        }

    });
})