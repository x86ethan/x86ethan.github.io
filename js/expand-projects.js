function expand_projects() {

    const section_projects = document.getElementById("section-projects");
    const section_about = document.getElementById("section-about");
    const section_information = document.getElementById("section-information");

    section_information.classList.toggle("projects-expanded");
    section_about.classList.toggle("projects-expanded");
    section_projects.classList.toggle("projects-expanded");

}