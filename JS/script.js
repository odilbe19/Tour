const searchBtn = document.querySelector('#search-btn')
const searchBar = document.querySelector('.search-bar-container')
const formBtns = document.querySelectorAll('.login-btn')
const loginForm = document.querySelector('.login-form-container')
const formClose = document.querySelector('#form-close')
const menu = document.querySelector('#menu-bar')
const navbar = document.querySelector('.navbar')
const videoBtn = document.querySelectorAll('.vid-btn')

const mass = [
    {
        email: "nurali@gmail.com",
        password: "123456"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const emailValue = document.getElementById("emailInput").value;
        const passwordValue = document.getElementById("passwordInput").value;

        // Check if the email exists in the 'mass' array
        const userExists = mass.some(item => item.email === emailValue);

        if (userExists) {
            alert('Success');
        } else {
            alert('You do not exist');
        }
    });
});


window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
    loginForm.classList.remove('active')

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active')
    } else {
        document.querySelector('#scroll-top').classList.remove('active')
    }
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

formBtns.forEach(formBtn => {
    formBtn.addEventListener('click', () => {
        loginForm.classList.add('active')
    })
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active')
})

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
})

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
})