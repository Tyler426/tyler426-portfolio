document.addEventListener("DOMContentLoaded", function () {
    var menuIcon = document.querySelector('.menu-icon');
    var menuItems = document.querySelector('.menu-items');

    menuIcon.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
        var isMenuIcon = menuIcon.contains(event.target);
        var isMenuItems = menuItems.contains(event.target);

        if (!isMenuIcon && !isMenuItems) {
            menuItems.classList.remove('active');
        }
    });

    // Adjust the menu state when resizing the window
    window.addEventListener('resize', function () {
        if (window.innerWidth > 600) {
            menuItems.classList.remove('active');
        }
    });
});
