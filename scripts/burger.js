const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('mobile-nav');
const navLinks = document.querySelectorAll('.navigation-box a');
const body = document.body;

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('nav-active');
    burgerMenu.setAttribute('aria-expanded', burgerMenu.classList.contains('active'));
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('nav-active');
        burgerMenu.setAttribute('aria-expanded', false);
    });
});