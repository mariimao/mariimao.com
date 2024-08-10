function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menudark = document.getElementById('menu-dark');
    const menulight = document.getElementById('menu-light');
    const navbar = document.getElementById('navbar');
    const navbarUl = navbar.querySelector('ul'); // Get the ul within the navbar

    if (menuToggle.style.display === 'none') {
        navbarUl.style.display = 'flex';
        navbarUl.style.flexDirection = 'row';
    }

    menuToggle.addEventListener('click', function() {
        console.log('menuToggle clicked');
        if (menulight.src.includes("menu-light.svg")) {
            menudark.src = "attachments/menu-close-dark.svg";
            menulight.src = "attachments/menu-close.svg";
            navbarUl.style.display = 'block';
            const firstLi = navbarUl.querySelector('a'); // Get the first li within the ul
            if (firstLi) {
                firstLi.setAttribute('tabindex', '0'); // Make the first li focusable
                firstLi.focus();
            }
        } else {
            menudark.src = "attachments/menu-dark.svg";
            menulight.src = "attachments/menu-light.svg";
            navbarUl.style.display = 'none';
            const firstLi = navbarUl.querySelector('a'); // Get the first li within the ul
            if (firstLi) {
                firstLi.removeAttribute('tabindex'); // Remove tabindex when hidden
            }
        }

        menuToggle.style.outline = 'none'; // Remove focus outline
    });

    menuToggle.addEventListener('focusin', function() {
        menuToggle.style.outline = '3px solid var(--yellow)';
    });

    menuToggle.addEventListener('focusout', function() {
        menuToggle.style.outline = 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    toggleMenu();
});