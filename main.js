let searchBox = document.querySelector('.search-box');
let searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
});

// Close search box when clicking outside
document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBox.classList.remove('active');
    }
});


let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');

cartIcon.addEventListener('click', (event) => {
    cart.classList.toggle('active');
	searchBox.classList.remove('active');
	user.classList.remove('active');
    navbar.classList.remove('active');
});

let userIcon = document.querySelector('#user-icon');
let user = document.querySelector('.user');

userIcon.addEventListener('click', (event) => {
    user.classList.toggle('active');
	searchBox.classList.remove('active');
	cart.classList.remove('active');
    navbar.classList.remove('active');
});

let navbar = document.querySelector('.navbar');
let menuIcon = document.querySelector('#menu-icon');

menuIcon.addEventListener('click', (event) => {
    navbar.classList.toggle('active');
    user.classList.remove('active');
    searchBox.classList.remove('active');
    cart.classList.remove('active');
});



let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow',window.scrollY > 0);
});

window.onscroll = () => {
    navbar.classList.remove('active');
    user.classList.remove('active');
    searchBox.classList.remove('active');
    cart.classList.remove('active');
}

var swiper = new Swiper(".new-arrival", {
    slidesPerView: 3,  // Show 3 slides
    spaceBetween: 20,  // Space between slides
    loop: true,        // Infinite loop
    autoplay: {
        delay: 3000,   // Auto-slide every 3 seconds
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Responsive breakpoints
        320: {
            slidesPerView: 1, // 1 slide on small screens
        },
        768: {
            slidesPerView: 2, // 2 slides on medium screens
        },
        1024: {
            slidesPerView: 3, // 3 slides on large screens
        },
    },
});