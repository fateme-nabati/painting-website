
// let searchBtn = document.querySelector('#search-btn');
// let searchBar = document.querySelector('.search-bar-container');
// let formBtn = document.querySelector('#login-btn');
// let signupBtn = document.querySelector('#signup-btn');
// let loginForm = document.querySelector('.login-form-container');
// let signupForm = document.querySelector('.signup-form-container');
// let formClose = document.querySelector('#form-close');
// let signUpClose = document.querySelector('#signup-close');
// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to bady (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 
  $(".small-image").click(function(){
    // $("#show_image_popup").fadeIn();
    alert("hello");
    $("#show_image_popup").show()
  })
  $(".close-btn").click(function(){
    // $("#show_image_popup").fadeOut()
    $("#show_image_popup").hide()
  })
  // DOMContentLoaded  end
// window.onscroll = () =>{
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active');
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
//     loginForm.classList.remove('active');
//     signupForm.classList.remove('active');
// }

// menu.addEventListener('click', () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// });

// searchBtn.addEventListener('click', () =>{
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.toggle('active');
// });

// formBtn.addEventListener('click', () =>{
//     loginForm.classList.add('active');
// });

// formClose.addEventListener('click', () =>{
//     loginForm.classList.remove('active');
// });

// signupBtn.addEventListener('click', () =>{
//     signupForm.classList.add('active');
// });

// signUpClose.addEventListener('click', () =>{
//     signupForm.classList.remove('active');
// });


// var swiper = new Swiper(".books-slider", {
//     loop:true,
//     centeredSlides: true,
//     autoplay: {
//         delay: 9500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });


// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".brand-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         450: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         991: {
//             slidesPerView: 4,
//         },
//         1200: {
//             slidesPerView: 5,
//         },
//     },
// });