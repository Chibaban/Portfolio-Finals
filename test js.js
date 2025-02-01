document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.clickable');
    const previewBox = document.getElementById('preview-box');
    const previewText = document.getElementById('preview-text');
    let activeImage = null;

    // Function to reset the preview box to its default content
    const resetPreviewBox = () => {
        previewText.textContent = "This is the preview box. Click an image to view its details here.";
    };

    // Initialize the default content on page load
    resetPreviewBox();

    // Add click event listeners to all images
    images.forEach(image => {
        image.addEventListener('click', () => {
            const details = image.getAttribute('data-details');
            if (activeImage === image) {
                // Reset to default if the same image is clicked again
                resetPreviewBox();
                activeImage = null;
            } else {
                // Show the clicked image's details
                previewText.textContent = details;
                activeImage = image;
            }
        });
    });
});
