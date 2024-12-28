// Store images for each project
const projects = {
    "project17-img": [
        "img/projects/17/1.png",
        "img/projects/17/2.png",
        "img/projects/17/3.jpg",
        "img/projects/17/4.png",
        "img/projects/17/5.png"
    ],
    "project16-img": [
        "img/projects/16/1.png",
        "img/projects/16/2.png",
        "img/projects/16/3.gif",
        "img/projects/16/4.gif"
    ],
    "project15-img": [
        "img/projects/15/1.png",
        "img/projects/15/2.png",
        "img/projects/15/3.gif"
    ],
    "project14-img": [
        "img/projects/14/1.png",
        "img/projects/14/2.gif",
        "img/projects/14/3.gif",
        "img/projects/14/4.gif"
    ],
    "project12-img": [
        "img/projects/12/1.png",
        "img/projects/12/2.png",
        "img/projects/12/3.png",
        "img/projects/12/4.png"
    ],
    "project11-img": [
        "img/projects/11/1.jpg",
        "img/projects/11/2.jpg",
        "img/projects/11/3.png"
    ],
    "project10-img": [
        "img/projects/10/1.jpg",
        "img/projects/10/2.png",
        "img/projects/10/3.png"
    ],
    "project9-img": [
        "img/projects/9/1.jpg",
        "img/projects/9/2.jpg"
    ],
    "project8-img": [
        "img/projects/8/1.png",
        "img/projects/8/2.png"
    ],
    "project7-img": [
        "img/projects/7/1.png",
        "img/projects/7/2.png"
    ],
    "project6-img": [
        "img/projects/6/1.png",
        "img/projects/6/2.png"
    ]
};

// Store the current index for each project
const currentIndex = {
    "project17-img": 0,
    "project16-img": 0,
    "project15-img": 0,
    "project14-img": 0,
    "project12-img": 0,
    "project11-img": 0,
    "project10-img": 0,
    "project9-img": 0,
    "project8-img": 0,
    "project7-img": 0,
    "project6-img": 0
};

// Function to change the image
function changeImage(direction, projectId) {
    const images = projects[projectId];
    const imgElement = document.getElementById(projectId);

    // Update the current index
    currentIndex[projectId] += direction;

    // Handle index out of bounds
    if (currentIndex[projectId] < 0) {
        currentIndex[projectId] = images.length - 1;
    } else if (currentIndex[projectId] >= images.length) {
        currentIndex[projectId] = 0;
    }

    // Update the image source
    imgElement.src = images[currentIndex[projectId]];
}
