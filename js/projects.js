// 1. Project Data
const projects = [
    {
        title: "CYBERDECK (RASPBERRY PI)",
        link: "projects/cyberdeck.html",
        image: "images/dyberdeck1.jpeg",
        description: "I made a cyberdeck using a Raspberry Pi, Linux (Armbian OS), and Peripherals. I'm still in the prototyping stage, I'm planning on improving the design and structure.",
        tags: ["Raspberry Pi", "Linux", "Hardware", "Embedded Systems"]
    },
    {
        title: "LIGHTSTICK (STM32 NUCLEO)",
        link: "projects/lightstick.html",
        image: "images/lightstick0.jpeg",
        description: "I utilized C and the STM32 Nucleo Microcontroller to make an interactive lightstick that flashes to the BPM of your favorite songs.",
        tags: ["C", "STM32", "Microcontrollers", "Embedded Systems"]
    },
    {
        title: "HEXCODE GAME (ARDUINO & PI)",
        link: "projects/secret.html",
        image: "images/hackathon_circuit.jpg",
        description: "For I-Hack 2023 We made a hexadecimal game where one adjusts the Red, Green, and Blue values using potentiometers. I was in charge of the hardware aspects of this project.",
        tags: ["Arduino", "Hardware", "Potentiometers"]
    },
    {
        title: "MARBACH ANIMAL HOSPITAL WEBSITE",
        link: "projects/marbach.html",
        image: "images/small_marbach.png",
        description: "I made a real professional website for an animal hospital in San Antonio, TX in collaboration with a web designer.",
        tags: ["Web Development", "HTML & CSS"]
    },
    {
        title: "UMAMUSUME PRODUCTIVITY HELPER",
        link: "projects/productivity.html",
        image: "images/uma_landing.png",
        description: "I made a dyanamic, JavaScript-based web app centered around ",
        tags: ["Web Development", "JavaScript", "HTML & CSS"]
    }

];


const projectGrid = document.getElementById("project-grid");
const searchInput = document.getElementById("searchInput");


function filterProjects(searchTerm) {
    const searchLower = searchTerm.toLowerCase();

    const filtered = projects.filter(project => {
        const matchesTitle = project.title.toLowerCase().includes(searchLower);
        const matchesDescription = project.description.toLowerCase().includes(searchLower);
        const matchesTags = project.tags.some(tag => tag.toLowerCase().includes(searchLower));

        return matchesTitle || matchesDescription || matchesTags;
    });

    displayProjects(filtered);
}


function displayProjects(projectsToRender) {
    projectGrid.innerHTML = "";

    projectsToRender.forEach(project => {
        const tagsHTML = project.tags.map(tag => 
            `<button type="button" class="skills tag-btn">${tag}</button>`
        ).join("");

        const projectHTML = `
            <article class="project-card">
                <img class="project-card-image" src="${project.image}" alt="${project.title}">
                <div class="project-card-body">
                    <a href="${project.link}">
                        <h3>${project.title}</h3>
                    </a>
                    <div class="project-para">
                        <p>${project.description}</p>
                    </div>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                </div>
            </article>
        `;

        projectGrid.innerHTML += projectHTML;
    });
}


searchInput.addEventListener("input", (e) => {
    filterProjects(e.target.value);
});


projectGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("tag-btn")) {
        const selectedTag = e.target.textContent.trim();
        searchInput.value = selectedTag;
        filterProjects(selectedTag);
    }
});


displayProjects(projects);