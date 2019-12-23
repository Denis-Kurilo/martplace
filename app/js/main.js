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

//dropdown
$('.header__user').on('click', function(e){
$('.dropdown__user').slideToggle();
e.stopPropagation();
});
$('.dropdown__user').click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $('.dropdown__user').hide();
});


$('.backet__box').on('click', function(e){
$('.dropdown__box').slideToggle();
e.stopPropagation();
});
$('.dropdown__box').click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $('.dropdown__box').hide();
});


$('.notification__box').on('click', function(e){
$('.dropdown__notification').slideToggle();
e.stopPropagation();
});
$('.dropdown__notification').click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $('.dropdown__notification').hide();
});


$('.message__box').on('click', function(e){
$('.dropdown__message').slideToggle();
e.stopPropagation();
});
$('.dropdown__message').click(function(e) {
  e.stopPropagation();
});
$(document).click(function() {
  $('.dropdown__message').hide();
});

$('.dropdown-position').hover(function(){
$('.dropdown__col-wrapper').addClass('active');
});

/*$('.dropdown__col-wrapper').hover(function(e) {
  $(this).removeClass('active');
  e.stopPropagation();
})*/
/*$(document).click(function() {
  $('.dropdown__col-wrapper').hide();
});*/
/*$('.dropdown-position').on('click', function(e){
$('.dropdown__col-wrapper').toggle();
e.stopPropagation();
});
$('.dropdown__col-wrapper').click(function(e) {
  e.stopPropagation();
});*/
/*$(document).click(function() {
  $('.dropdown__col-wrapper').hide();
});*/
//dropdown - end

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
