// Function to open the modal with the clicked image
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    // Set the source of the modal image to be the clicked image
    modal.style.display = "flex";  // Change to 'flex' to enable centering
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;  // Use the image's alt text as caption
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
