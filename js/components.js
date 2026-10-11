
const leftSectionHTML = `
    <nav>
        <ul>
            <li><a href="/">Home °❀⋆.ೃ࿔*:･</a></li>
            <li><a href="/about.html">About °❀⋆.ೃ࿔*:･</a></li>
            <li><a href="/contact.html">Contact °❀⋆.ೃ࿔*:･</a></li>
            <li><a href="/projects.html">Projects °❀⋆.ೃ࿔*:･</a></li>
        </ul>
    </nav>
`;

const rightSectionHTML = `
    <div class="small-sec">
        <div id="profile-sec">
            <div class="small-image">
                <img src="images/profile.jpg" id="mini-profile">
            </div>
            <div class="small-text">
                <div class="small-title">
                    <h2><strong>Leslie Jury</strong></h2>
                </div>
                <div class="small-subtitle">
                    <p>Embedded Systems and Electronics</p>
                </div>
            </div>
        </div>
        <div class="small-para">
            <a href="mailto:lesliejury3@gmail.com">lesliejury3@gmail.com</a>   
        </div>
        <div class="button-collection">
            <a href="files/current-resume.pdf" target="_blank"><button>Resume</button></a>
            <a href="https://www.linkedin.com/in/lesliejury/" target="_blank"><button>LinkedIn</button></a>
        </div>
    </div>

    <div class="small-sec">
        <div class="small-text">
            <div class="small-title">
                <h2><strong>Basic Info</strong></h2>
            </div>
            <div class="small-para">
                <p>Computer Programmer with an emphasis in embedded systems. Interested in firmware, 
                hardware-software integration, PCB design, and full-stack creative projects.</p>
            </div>
        </div>
    </div>

    <div class="small-sec">
        <div class="small-text">
            <div class="small-title">
                <h2><strong>Technical Skills</strong></h2>
            </div>
        </div>
        <div class="button-collection">
            <button class="skills">Microcontrollers</button>
            <button class="skills">Python</button>
            <button class="skills">PCB</button>
            <button class="skills">FPGA</button>
            <button class="skills">Linux</button>
            <button class="skills">GIT</button>
            <button class="skills">IoT</button>
            <button class="skills">Windows/Mac</button>
        </div>
    </div>
`;

// Wait for the DOM to fully load before inserting the HTML
document.addEventListener("DOMContentLoaded", () => {
    const leftSection = document.getElementById("left-section");
    const rightSection = document.getElementById("right-section");

    if (leftSection) {
        leftSection.innerHTML = leftSectionHTML;
    }

    if (rightSection) {
        rightSection.innerHTML = rightSectionHTML;
    }
});