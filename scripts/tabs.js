function tabHandling(e) {
    const target = e.currentTarget;
    const parent = target.parentNode; 

    // Remove old tab active class
    for (var child of parent.children) {
        child.classList.remove("tab-active");
    }

    target.classList.add("tab-active");
    
    // Call the tab functionnality function
    tabFunctionnalityHandling(parent);
}

// Add clickable event on all tabs
const tabs = document.getElementsByClassName("tabs");


for (var tabBar of tabs) {
    // Iterate through children
    for (var child of tabBar.children) {
        child.addEventListener('click', tabHandling);
    }
}

function tabFunctionnalityHandling (target) {

    // Get the current active tab

    var active_tab;
    for (var child of target.children) {
        if (child.classList.contains("tab-active")) {
            active_tab = child;
        }
    
    }

    if (target == document.getElementById("projects-tab")) {

        var development_projects = document.getElementById("development-projects");
        var deployement_projects = document.getElementById("deployment-projects");
    
        if (active_tab.innerText == "Déploiement") {
            // Hide development projects & show deployment projects
            development_projects.style.display = "none";
            deployement_projects.style.display = "flex";
        } else if (active_tab.innerText == "Développement") {
            // Do the same but in reverse
            development_projects.style.display = "flex";
            deployement_projects.style.display = "none";
        }

    }


}