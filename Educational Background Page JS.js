document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-details]');
    const previewBox = document.getElementById('preview-box');
    const previewText = document.getElementById('preview-text');
    let activeImage = null;

    // Function to reset the preview box to its default content
    const resetPreviewBox = () => {
        previewText.textContent = "This is the preview box. Click an image to view its details here.";
    };

    // Function to clear the highlighted class and remove disabled state from all images
    const clearHighlightsAndEnable = () => {
        images.forEach(image => {
            image.classList.remove('highlighted');
            image.style.pointerEvents = ''; // Re-enable click events
        });
    };

    // Add click event listeners to all images
    images.forEach(image => {
        image.addEventListener('click', () => {
            const details = image.getAttribute('data-details');

            if (activeImage === image) {
                // If the same image is clicked, do nothing
                return;
            }

            // Clear highlights and re-enable all images
            clearHighlightsAndEnable();

            // Highlight and disable the clicked image
            image.classList.add('highlighted');
            image.style.pointerEvents = 'none'; // Disable click events for this image

            // Update the preview box with the clicked image's details
            if (!previewBox.classList.contains('hidden')) {
                // Close the preview box first if it's already open
                previewBox.classList.remove('opening');
                previewBox.classList.add('closing');

                setTimeout(() => {
                    previewText.innerHTML = details;
                    previewBox.classList.remove('closing');
                    previewBox.classList.add('opening');
                }, 500); // Match the duration of the 'closing' animation
            } else {
                // Open the preview box directly if hidden
                previewText.innerHTML = details;
                previewBox.classList.remove('hidden');
                previewBox.classList.add('opening');
            }

            activeImage = image; // Update the active image
        });
    });
});
