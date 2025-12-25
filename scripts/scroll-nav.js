document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navigation-box a");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // Adjust the offset (150px) to trigger the change slightly before the section hits the very top
            if (window.scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute("id");
            }
        });

        const socialNav = document.getElementById("desktop-nav-social-icons");
        if (currentSection === "section-header") {
            socialNav.classList.remove("shown");
        } else if (!socialNav.classList.contains("shown")) {
            console.log("welcome to my life"); 
            socialNav.classList.add("shown");
        }

        navLinks.forEach((link) => {
            link.classList.remove("nav-link-active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("nav-link-active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink(); // Run once on load to set initial state
});