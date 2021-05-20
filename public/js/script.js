$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $("body a").on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60

            }, 1000, function(){

            window.location.hash = hash ;

        });
        }
    });

    window.scrollTo(0,0);
});
