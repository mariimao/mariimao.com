function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    // const menudark = document.getElementById('menu-dark');
    const menulight = document.getElementById('menu-light');
    const navbar = document.getElementById('navbar');
    const navbarUl = navbar.querySelector('ul:nth-of-type(2)'); // Get the ul within the navbar


    menuToggle.addEventListener('click', function() {
        console.log('menuToggle clicked');
        if (!menulight.src.includes("close")) {
            if (!menulight.src.includes("dark")) {
                menulight.src = "attachments/menu-close.svg";
            } else {
                menulight.src = "attachments/menu-close-dark.svg";
            }
            navbarUl.style.display = 'block';
        } else {
            if (!menulight.src.includes("dark")) {
                menulight.src = "attachments/menu-light.svg";
            } else {
                menulight.src = "attachments/menu-dark.svg";
            }
            navbarUl.style.display = 'none';
        }
    });

    function handleResize() {
        if (window.innerWidth > 820) {
            if (!menulight.src.includes("dark")) {
                menulight.src = "attachments/menu-light.svg";
            } else {
                menulight.src = "attachments/menu-dark.svg";
            }
            navbarUl.style.display = 'none';
        }
    }

    function handleClickOutside(event) {
        if (!navbarUl.contains(event.target) && !menuToggle.contains(event.target)) {
            if (!menulight.src.includes("dark")) {
                menulight.src = "attachments/menu-light.svg";
            } else {
                menulight.src = "attachments/menu-dark.svg";
            }
            navbarUl.style.display = 'none';
        }
    }

    document.addEventListener('click', handleClickOutside);

    window.addEventListener('resize', handleResize);

    handleResize();
}

document.addEventListener('DOMContentLoaded', function() {
    toggleMenu();
});