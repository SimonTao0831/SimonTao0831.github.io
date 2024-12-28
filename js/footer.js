// footer.js
document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.getElementById("footer-placeholder");

    fetch("footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer.");
            }
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
});
