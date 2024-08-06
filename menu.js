function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menudark = document.getElementById('menu-dark');
    const menulight = document.getElementById('menu-light');
    const navbar = document.getElementById('navbar');
    const navbarUl = navbar.querySelector('ul'); // Get the ul within the navbar

    menuToggle.addEventListener('click', function() {
        console.log('menuToggle clicked');
        if (menulight.src.includes("menu-light.svg")) {
            menudark.src = "attachments/menu-close-dark.svg";
            menulight.src = "attachments/menu-close.svg";
            navbarUl.style.display = 'block';
        } else {
            menudark.src = "attachments/menu-dark.svg";
            menulight.src = "attachments/menu-light.svg";
            navbarUl.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    toggleMenu();
});