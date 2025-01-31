$(function(){
    $('.product_slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left left_arrow"></i>','<i class="fa-solid fa-angle-right right_arrow"></i>'],
        dots:true,
        autoplay:true,
        smartSpeed:500,
        autoplaySpeed:2500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
                loop:false,
                autoplay:false,
            },
        }
    });
});