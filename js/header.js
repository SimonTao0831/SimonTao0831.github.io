// header.js
document.addEventListener("DOMContentLoaded", function () {
    const headerPlaceholder = document.getElementById("header-placeholder");

    fetch("header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header.");
            }
            return response.text();
        })
        .then(html => {
            headerPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
});

