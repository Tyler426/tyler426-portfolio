// script.js

document.addEventListener('DOMContentLoaded', function () {
    const projectsNavItem = document.querySelector('.nav-projects');
    const projectsSubMenu = document.querySelector('.projects-submenu');

    projectsNavItem.addEventListener('click', function (event) {
        event.preventDefault();
        projectsSubMenu.classList.toggle('show');
    });

    // Close the drop-down menu if the user clicks outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.nav-projects')) {
            projectsSubMenu.classList.remove('show');
        }
    });
});
