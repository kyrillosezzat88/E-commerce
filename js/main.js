/*Preload function */
$(window).on('load' , function(){
  console.log('loaded');
  $('.preloading').addClass('complete');
});
/**********************Home page ****************/
// Right menu Functions
$(".slider .menu").click(function(e) {
  $(".slidM").css({
    right: "0"
  });
  $(".overlay").css({
    zIndex: "999",
    position: "fixed"
  });
  e.stopPropagation();
});
// Close Menu and shopping cart Functions
$(".fa-times").click(() => {
  $(".slidM").css({
    right: "-400"
  });
  $(".cartM").css({
    right: "-400"
  });
  $(".overlay").css({
    zIndex: "0",
    position: "absolute"
  });
});
//Shopping cart Functions
$(".fa-shopping-cart").click(e => {
  $(".cartM").css({
    right: "0"
  });
  $(".overlay").css({
    zIndex: "999",
    position: "fixed"
  });
  e.stopPropagation();
});
// functions to hide menu and shopping cart when click on body
$("body").click(() => {
  $(".slidM").css({
    right: "-400"
  });
  $(".cartM").css({
    right: "-400"
  });
  $(".overlay").css({
    zIndex: "0",
    position: "absolute"
  });
});
$(".slidM").click(function(e) {
  e.stopPropagation();
});
$(".cartM").click(e => {
  e.stopPropagation();
});
//Scroll Function
$(window).scroll(() => {
  if ($(window).scrollTop() > 300) {
    $("nav:eq(0)").addClass("sticky");
  } else {
    $("nav:eq(0)").removeClass("sticky");
  }
});

//show now effect
// $('.Cate .col-12').hover(()=>{
//     $('.over h6').addClass('fadeInUp');
//     console.log('yay')
// },()=>{});

//like functions
for (let i = 0; i < $(".fa-heart").length; i++) {
  $(".fa-heart:eq(" + i + ")").click(() => {
    $(".fa-heart:eq(" + i + ")").toggleClass("active");
  });
}
// shop page
$(".btn-filter").click(() => {
  $(".menu-filter")
    .slideDown()
    .css({
      display: "flex"
    });
  $(".main-search").slideUp();
});
$(".btn-search").click(() => {
  $(".main-search")
    .slideDown()
    .css({
      display: "flex"
    });
  $(".menu-filter").slideUp();
});
$(window).scroll(() => {
  if (window.pageYOffset > 100) {
    $(".main .navbar").css({
      position: "fixed",
      top: "0",
      transition: "all .4s ease-in-out"
    });
  } else {
    $(".main .navbar").css({
      position: "relative",
      top: "0",
      transition: "all .4s ease-in-out"
    });
  }
});

/******************Shop Page*********************** */

//Filter items from list on click

$(".TopPro").isotope({
  itemSelector: ".item",
  layoutMode: "fitRows"
});
$(".cati-menu li").click(function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
  var selector = $(this).attr("data-target");
  $(".TopPro").isotope({
    filter: selector
  });
  return false;
});

/************** Feauters pages ********************/
// decreement amount functions
$(".shopping-cart table span:eq(0)").click(() => {
  if ($(".shopping-cart table input[type=number]:eq(0)").val() == 0) {
    $(".shopping-cart  table  input[type=number]:eq(0)").val(0);
  } else {
    $(".shopping-cart  table  input[type=number]:eq(0)").val(function(
      i,
      oldval
    ) {
      return --oldval;
    });
  }
});
// increement amount function
$(".shopping-cart table span:eq(1)").click(() => {
  $(".shopping-cart  table  input[type=number]:eq(0)").val(function(i, oldval) {
    return ++oldval;
  });
});
$(".shopping-cart table span:eq(2)").click(() => {
  if ($(".shopping-cart table input[type=number]:eq(1)").val() == 0) {
    $(".shopping-cart  table  input[type=number]:eq(1)").val(0);
  } else {
    $(".shopping-cart  table  input[type=number]:eq(1)").val(function(
      i,
      oldval
    ) {
      return --oldval;
    });
  }
});
// increement amount function
$(".shopping-cart table span:eq(3)").click(() => {
  $(".shopping-cart  table  input[type=number]:eq(1)").val(function(i, oldval) {
    return ++oldval;
  });
});
/*******************View Page ***************** */
$('.imgleft').click(function(){
  console.log('clicked');
  if($(this).data('target') == '.pro1'){
    $($(this).data('target')).addClass('active').siblings().removeClass('active');
  } else{
    $($(this).data('target')).addClass('active').siblings().removeClass('active');
  }
});
//increment and decreement value
$('.minus').click(function(){
  if($('input[type=number]').val() == 0){
    $('input[type=number]').val(0);
  } else{
    $('input[type=number]').val(function(i , oldval){
      return --oldval;
    })
  }
});
$('.plus').click(function(){
  $('input[type=number]').val(function(i , oldval){
    return ++oldval
  });
});

//Description part
$('.description ul li').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
  console.log($(this).data('class'));
  if($(this).data('class') === '.reviews'){
    $($(this).data('class')).siblings().fadeOut(1,()=>{$($(this).data('class')).fadeIn().css({display:'flex'})});
  }else{
    $($(this).data('class')).siblings().fadeOut(1,()=>{$($(this).data('class')).fadeIn().css({display:'flex'})});
  }
})
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})
