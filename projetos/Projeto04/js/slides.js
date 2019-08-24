$(function(){
    $('.mosaico-wrapper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }
            
        ]
    });


    $('.depoimentos .container').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

   
   $('.mosaico-social').slick({
       slidesToShow: 9,
       arrows: false,
       responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 6,
                centerMode: true,
                infinite: true,
            }
        },

        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3,
                centerMode: true,
                infinite: true,
            }
        }
        
    ]
   });

})

