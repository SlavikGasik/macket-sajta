/* --script za strelice: palimo true - gasimo false. */
$(document).ready(function(){
    $('.sliderbig').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1800,
        infinite:true,
        easing:'ease',
        autoplay:true,
        fade:true,/* prije promjeni jednog slidera zatamnju je se ovaj slider on se ne lista a pojavlju je se*/
        centerMode:false,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        variableWidth:false,
        rows:1,
        asNavFor:".sliderbig2",/* Prije promjeni prvogo slidera mjenja se drugi slider, tako povezujem slideri */

    });
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:4,
        slidesToScroll:4,/* prolaz kolicina slida */
        speed:1800,/* brzina prolaza slidera */
        easing:'ease',
        infinite:true,/* false slider ima zavrsetak, true-bude vrtio se stalno */
        initialSlider:0,/* Start sa prvog slidera a moze i neki drugi */
        autoplay:true,/* Automatski listanje slidera */
        autoplaySpeed:1500,/* za koliko sekund se lista slider */
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,/* false na kompu ne mozemo gurati slideri misem  */
        swipe:true, /* false na mobitelah nemozemo misem gurati slideri */
        touchThreshold:4,/* Slider djele na nekoliko djela */
        tochMove:true,/* Ima opciju gdje false ne mozempo povuci slider samo strelica */
        waitForAnimate:true,/* False brzo klikas i mjenjas slider, true kako zadano */
        centerMode:false, /* Ova opcija stavi true glavni slider po centru - false ugasimo */
        variableWidth:true,
        rows:1,/* Pokazivamo koliko reda mozemo napraviti */
        slidesPerRow:1,/* U koliko reda bude slider */
        vertical:false, /* Ovo je za vertikalni slider */
        verticalSwiping:false, /* ZA vertikalnii slider */
        
        responsive:[ /* Ova funkcija za mobilnu verziju */
            {
                breakpoint:768,
                settings:{
                    sliderToShow:4,
                }
            },{
                breakpoint:480,
                settings:{
                    sliderToShow:4,
                }
            }
        ],
        mobileFirst:false,
    });
    $('.sliderbig2').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        asNavFor:".sliderbig",
    });
    $('.slider_brands').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 10,
        slidesToScroll:10,
        adaptiveHeight: true,
        autoplay:true,
        tochMove:true,
        variableWidth:true, /* ovdje ja mogu mjenjati širinu medju slikama */
    });
    $('.slider_benetton').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
    });
});

