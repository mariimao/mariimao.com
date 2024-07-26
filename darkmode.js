function initializeDarkModeToggle() {
    const darkToggle = document.getElementById('darkToggle');
    const htmlElement = document.documentElement;
    const themeColorMetaTag = document.getElementById('theme-color');
    const homewall = document.getElementById('home-wall');

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeColorMetaTag.setAttribute('content', '#262a67'); // Dark mode theme color
        } else {
            themeColorMetaTag.setAttribute('content', '#9a5752'); // Light mode theme color
        }
    } else {
        htmlElement.classList.add('light-mode');
        themeColorMetaTag.setAttribute('content', '#9a5752'); // Default to light mode theme color
    }

    darkToggle.addEventListener('click', function() {
        if (htmlElement.classList.contains('light-mode')) { // Switch to dark mode
            htmlElement.classList.remove('light-mode');
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            themeColorMetaTag.setAttribute('content', '#262a67'); // Dark mode theme color
            homewall.style.backgroundImage = "url('attachments/home-wall-dark.svg')";
        } else { // Switch to light mode
            htmlElement.classList.remove('dark-mode');
            htmlElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            themeColorMetaTag.setAttribute('content', '#9a5752'); // Light mode theme color
            homewall.style.backgroundImage = "url('attachments/home-wall.svg')";
        }
    });
}

initializeDarkModeToggle();