function tabHandling(e) {
    const target = e.currentTarget;
    const parent = target.parentNode; 

    // Remove old tab active class
    for (var child of parent.children) {
        child.classList.remove("tab-active");
    }

    target.classList.add("tab-active");
}

// Add clickable event on all tabs
const tabs = document.getElementsByClassName("tabs");


for (var tabBar of tabs) {
    // Iterate through children
    for (var child of tabBar.children) {
        child.addEventListener('click', tabHandling);
    }
}