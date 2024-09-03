function initializeDarkModeToggle() {
    const darkToggle = document.getElementById('darkToggle');
    const htmlElement = document.documentElement;
    const themeColorMetaTag = document.getElementById('theme-color');
    const logo = document.getElementById('logo-light');
    const darkmodeIcon = document.getElementById('mode-light');
    const menuIcon = document.getElementById('menu-light');
    
    let isdark = false;


    console.log('initializeDarkModeToggle');
    console.log(darkToggle);
    console.log(htmlElement);
    console.log(themeColorMetaTag);
    console.log(logo);
    console.log(darkmodeIcon);
    console.log(menuIcon);

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeColorMetaTag.setAttribute('content', '#262a67'); // Dark mode theme color
            logo.src = "/attachments/logo-dark.svg";
            darkmodeIcon.src = "/attachments/mode-dark.svg";
            menuIcon.src = "/attachments/menu-dark.svg";
            isdark = true;
        } else {
            themeColorMetaTag.setAttribute('content', '#9a5752'); // Light mode theme color
            isdark = false;
        }
    } else {
        htmlElement.classList.add('light-mode');
        themeColorMetaTag.setAttribute('content', '#9a5752'); // Default to light mode theme color
        isdark = false;
    }

    darkToggle.addEventListener('click', function() {
        console.log('darkToggle clicked');
        if (darkmodeIcon.src.includes("dark.svg")) {
            isdark = true;
        }

        if (!isdark) { // Switch to dark mode
            htmlElement.classList.remove('light-mode');
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeColorMetaTag.setAttribute('content', '#262a67'); // Dark mode theme color
            logo.src = "/attachments/logo-dark.svg";
            darkmodeIcon.src = "/attachments/mode-dark.svg";
            menuIcon.src = "/attachments/menu-dark.svg";
            isdark = true;
        } else { // Switch to light mode
            htmlElement.classList.remove('dark-mode');
            htmlElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            themeColorMetaTag.setAttribute('content', '#9a5752'); // Light mode theme color
            logo.src = "/attachments/logo.svg";
            darkmodeIcon.src = "/attachments/mode-light.svg";
            menuIcon.src = "/attachments/menu-light.svg";
            isdark = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeDarkModeToggle();
});