window.addEventListener('scroll', () => {
    var upButton = document.getElementById("up");
    var navLinks = document.getElementsByClassName("nav-link");

    if (window.scrollY > 100) {
        // Toggle upButton visibility
        upButton.classList.remove("hidden");
    } else {
        upButton.classList.add("hidden"); 
    }

    
    if (window.scrollY > document.getElementById("section-header").getBoundingClientRect().height) {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove("nav-link-header");
        }
    } else {
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.add("nav-link-header");
        }
    }
})