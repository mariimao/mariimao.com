function initializeDarkModeToggle() {
    const darkToggle = document.getElementById('darkToggle');
    const htmlElement = document.documentElement;

    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
    } else {
        htmlElement.classList.add('light-mode');
    }

    darkToggle.addEventListener('click', function() {
        if (htmlElement.classList.contains('light-mode')) {
            htmlElement.classList.remove('light-mode');
            htmlElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            htmlElement.classList.remove('dark-mode');
            htmlElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
}
