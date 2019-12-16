$(function(){

//rateYo
$("#rateYo, #followersRateYo, #sortProducts").rateYo({
    starWidth: "15px",
    rating: 4.5,
    readOnly: true
  });

//slick
$('.slideProducts__inner').slick({
	dots: false,
	slidesToShow: 1,
 	slidesToScroll:1,
 	arrows: true,
 	prevArrow: '<div class="prev icon-angle-left"></div>',
  	nextArrow: '<div class="next icon-angle-right"></div>',
});

$('.followers__inner').slick({
	dots: false,
	slidesToShow: 3,
 	slidesToScroll:2,
 	arrows: true,
 	prevArrow: '<div class="prev icon-angle-left"></div>',
  	nextArrow: '<div class="next icon-angle-right"></div>',
});

//jQuery Form Styler
$('input, select').styler();

$('.header__user').on('click', function(){
$('.dropdown__user').slideToggle();
});

$('.backet__box').on('click', function(){
$('.dropdown__box').slideToggle();
});

$('.notification__box').on('click', function(){
$('.dropdown__notification').slideToggle();
});



//mixitup
var mixer = mixitup('.sortProducts__inner');

});