const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('mobile-nav');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.querySelectorAll('#navigation-list a');
const body = document.body;

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('nav-active');
    burgerMenu.setAttribute('aria-expanded', burgerMenu.classList.contains('active'));
});

closeMenu.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('nav-active');
    burgerMenu.setAttribute('aria-expanded', false);
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('nav-active');
        burgerMenu.setAttribute('aria-expanded', false);
    });
});