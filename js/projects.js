const projects = [
    { title: "CYBERDECK", link: "projects/cyberdeck.html", image: "images/dyberdeck1.jpeg", description: "A portable Raspberry Pi computer running Armbian, designed around a custom hardware layout and a lunchbox prototype.", tags: ["Raspberry Pi", "Linux", "Hardware", "Embedded Systems"] },
    { title: "LIGHTSTICK", link: "projects/lightstick.html", image: "images/lightstick0.jpeg", description: "An interactive C and STM32 project that makes a lightstick respond to the BPM of a song.", tags: ["C", "STM32", "Microcontrollers", "Hardware"] },
    { title: "UMAMUSUME PRODUCTIVITY HELPER", link: "projects/productivity.html", image: "images/uma_landing.png", description: "A dynamic JavaScript productivity web app inspired by Umamusume, with task planning and themed visual design.", tags: ["JavaScript", "Web Development", "HTML & CSS", "Software"] },
    { title: "HEXCODE GAME", link: "projects/secret.html", image: "images/hackathon_circuit.jpg", description: "A hexadecimal RGB game using potentiometers, built for I-Hack 2023 with a focus on the hardware system.", tags: ["Arduino", "Hardware", "Potentiometers"] },
    { title: "MARBACH ANIMAL HOSPITAL WEBSITE", link: "https://lesliejury.github.io/marbach_road_animal_hospital/", image: "images/small_marbach.png", description: "A professional website built for an animal hospital in collaboration with a web designer.", tags: ["Web Development", "HTML & CSS", "Software"], external: true, linkText: "View website" },
    { title: "SMALL PROJECTS COLLECTION", link: "projects/small.html", image: "images/bear_img.jpg", images: ["images/bear_img.jpg", "images/uma_racer.jpg"], description: "A collection of smaller experiments and class projects, including Mama Bear's Journey and Uma Racer.", tags: ["Collection", "School", "Experiments", "Programming"], collection: true }
];

const projectGrid = document.getElementById("project-grid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
let activeFilter = "";

function filterProjects(searchTerm = searchInput.value) {
    const exactTagSearch = /\s$/.test(searchTerm);
    const searchLower = searchTerm.trim().toLowerCase();
    displayProjects(projects.filter(project => {
        const matchesFilter = !activeFilter || project.tags.some(tag => tag.toLowerCase() === activeFilter);
        const matchesSearch = !searchLower || (exactTagSearch
            ? project.tags.some(tag => tag.toLowerCase() === searchLower)
            : project.title.toLowerCase().includes(searchLower) || project.description.toLowerCase().includes(searchLower) || project.tags.some(tag => tag.toLowerCase() === searchLower || tag.toLowerCase().includes(searchLower)));
        return matchesFilter && matchesSearch;
    }));
}

function displayProjects(projectsToRender) {
    projectGrid.innerHTML = projectsToRender.map(project => `
            <article class="project-card${project.collection ? " project-card-collection" : ""}">
            ${project.collection ? `<div class="collection-mosaic">${project.images.map((image, index) => `<img src="${image}" alt="${project.title} preview ${index + 1}">`).join("")}</div>` : `<img class="project-card-image" src="${project.image}" alt="${project.title}">`}
            <div class="project-card-body">
                <a href="${project.link}"${project.external ? ' target="_blank" rel="noopener noreferrer"' : ""}><h3>${project.title}</h3></a>
                <div class="project-para"><p>${project.description}</p></div>
                <div class="project-tags">${project.tags.map(tag => `<button type="button" class="skills tag-btn">${tag}</button>`).join("")}</div>
                <a class="project-card-button" href="${project.link}"${project.external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${project.linkText || "View project"} <span aria-hidden="true">→</span></a>
            </div>
        </article>`).join("");
}

searchInput.addEventListener("input", event => {
    activeFilter = "";
    filterButtons.forEach(button => button.classList.toggle("is-active", button.dataset.filter === ""));
    filterProjects(event.target.value);
});
filterButtons.forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    searchInput.value = "";
    filterButtons.forEach(filterButton => filterButton.classList.toggle("is-active", filterButton === button));
    filterProjects();
}));
projectGrid.addEventListener("click", event => {
    if (event.target.classList.contains("tag-btn")) {
        activeFilter = "";
        filterButtons.forEach(button => button.classList.toggle("is-active", button.dataset.filter === ""));
        searchInput.value = `${event.target.textContent.trim()} `;
        filterProjects(searchInput.value);
    }
});
displayProjects(projects);
