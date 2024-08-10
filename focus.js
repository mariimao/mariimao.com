document.addEventListener('DOMContentLoaded', function() {
    const focusContainer = document.querySelector('.focus-container');

    if (focusContainer) {
        focusContainer.addEventListener('focusin', function() {
            focusContainer.style.outline = '3px solid var(--yellow)';
        });

        focusContainer.addEventListener('focusout', function() {
            focusContainer.style.outline = 'none';
        });
    }
});