document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.querySelector('.menu-icon');
    var menuItems = document.querySelector('.menu-items');

    menuIcon.addEventListener('click', function() {
        menuItems.style.display = (menuItems.style.display === 'flex' || menuItems.style.display === '') ? 'none' : 'flex';
    });
});
