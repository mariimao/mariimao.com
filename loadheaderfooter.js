window.onload = function() {
    loadHeaderAndFooter();
};

function loadHeaderAndFooter() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            initializeDarkModeToggle(); // Initialize dark mode toggle after header is loaded
        });

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}