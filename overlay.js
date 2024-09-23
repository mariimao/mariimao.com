document.addEventListener('DOMContentLoaded', function() {
        const galleryButtons = document.querySelectorAll('.gallery-item-button');

        galleryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const imgSrc = button.querySelector('.gallery-item').getAttribute('src');
                showFullScreenImage(imgSrc);
            });
        });

        function showFullScreenImage(src) {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.classList.add('fullscreen-overlay');

            // Create image element
            const img = document.createElement('img');
            img.classList.add('fullscreen-image');
            img.setAttribute('src', src);

            // Append image to overlay
            overlay.appendChild(img);

            // Append overlay to body
            document.body.appendChild(overlay);

            // Add click event to overlay to close it
            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        }
    });