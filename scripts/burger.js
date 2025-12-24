const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('mobile-nav');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
});
