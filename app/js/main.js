$(function(){

//rateYo
$("#rateYoo ,#followersRateYoo").rateYo({
    starWidth: "17px",
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

//mixitup
var mixer = mixitup('.sortProducts__inner');

});