let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let scrollTop = document.querySelector('#scroll-top');
let header = document.querySelector('.header');
let darkToggle = document.querySelector('#dark-mode-toggle');

// DARK MODE TOGGLE
darkToggle.onclick = () => {
    let html = document.querySelector('html');
    let currentTheme = html.getAttribute('data-theme');
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Toggle icon
    let icon = darkToggle.querySelector('i');
    if (newTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
};

// Load saved theme
let savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.querySelector('html').setAttribute('data-theme', savedTheme);
    let icon = darkToggle.querySelector('i');
    if (savedTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    // Scroll to top button
    if (window.scrollY > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }

    // Header scrolled state
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Active nav link based on scroll position
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.header .navbar a');

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;
        let id = section.getAttribute('id');
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// MENU TABS
let menuTabs = document.querySelectorAll('.menu-tab');
let menuCategories = document.querySelectorAll('.menu-category');

menuTabs.forEach(tab => {
    tab.onclick = () => {
        // Remove active class from all tabs and categories
        menuTabs.forEach(t => t.classList.remove('active'));
        menuCategories.forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding category
        let categoryId = 'category-' + tab.getAttribute('data-category');
        document.getElementById(categoryId).classList.add('active');
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});