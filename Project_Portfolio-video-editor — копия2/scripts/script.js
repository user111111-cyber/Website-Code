$(document).ready(function () {
  var slider = $('.reviews__list')
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variablewidth: true
  });
  $('.prev-btn').on('click', function () {
    slider.slick('slickPrev');
  });
  $('.next-btn').on('click', function () {
    slider.slick('slickNext');
  });
});
const btnBrg=document.getElementById("btnBrg");
const menuBrg=document.getElementById("menuBrg");
btnBrg.addEventListener("click",()=>{
  menuBrg.classList.add('nav-list--burger');
});
menuBrg.addEventListener("click",()=>{
  menuBrg.classList.remove('nav-list--burger')
})

