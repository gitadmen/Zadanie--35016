
$(document).ready(function () {


    $("#button").click(function () {


        let calc = window.innerWidth / 2 - 50;
        $('#square').animate(

            {
                marginLeft: calc + "px",
                height: '100px',
                width: '100px',
                
            }, 3000, function () {
                $('#square').animate(
                    {
                        backgroundColor: 'blue',
                        color: 'red'
                    }, 5000, function (){
                        $(this).html('<h2> Koniec </h2>')
                    });

            }
        );

    });
})