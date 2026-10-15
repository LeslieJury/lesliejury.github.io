const leftSectionHTML = `
    <nav class="site-nav" aria-label="Primary navigation">
        <p class="nav-kicker">EXPLORE</p>
        <ul>
            <li><a data-page="home" href="/" aria-label="Home"><span class="nav-icon">⌂</span><span>Home</span></a></li>
            <li><a data-page="about" href="/about.html" aria-label="About Leslie"><span class="nav-icon">◎</span><span>About</span></a></li>
            <li><a data-page="projects" href="/projects.html" aria-label="Projects"><span class="nav-icon">▦</span><span>Projects</span></a></li>
            <li><a data-page="contact" href="/contact.html" aria-label="Contact Leslie"><span class="nav-icon">→</span><span>Contact</span></a></li>
        </ul>
        <p class="nav-kicker nav-kicker-spaced">CONNECT</p>
        <a class="nav-link" data-page="build-log" href="/build-log.html" aria-label="Build Log"><span class="nav-icon">✦</span><span>Build Log</span></a>
        <a class="nav-link" href="/files/current-resume.pdf" target="_blank" rel="noopener"><span class="nav-icon">↓</span><span>Resume</span></a>
        <a class="nav-link" href="https://www.linkedin.com/in/lesliejury/" target="_blank" rel="noopener"><span class="nav-icon">in</span><span>LinkedIn</span></a>
    </nav>
`;

const rightSectionHTML = `
    <aside class="profile-panel" aria-label="About Leslie">
        <div class="profile-card profile-card-featured">
            <div class="profile-heading">
                <img src="/images/profile.jpg" id="mini-profile" alt="Leslie Jury">
                <div><h2>Leslie Jury</h2><p>Embedded systems<br>& electronics</p></div>
            </div>
            <a class="email-link" href="mailto:lesliejury3@gmail.com">lesliejury3@gmail.com</a>
            <div class="profile-actions"><a class="button button-primary" href="/files/current-resume.pdf" target="_blank" rel="noopener">View resume</a><a class="button button-quiet" href="https://www.linkedin.com/in/lesliejury/" target="_blank" rel="noopener">LinkedIn</a><a class="button button-quiet" href="/build-log.html">Build Log</a><a class="button button-quiet" href="/contact.html">Get in touch</a></div>
        </div>
        <div class="profile-card"><p class="eyebrow">CURRENT FOCUS</p><p class="profile-copy">Firmware, hardware-software integration, PCB design, and creative full-stack projects.</p></div>
        <div class="profile-card"><p class="eyebrow">TOOLKIT</p><div class="skill-list"><span>Microcontrollers</span><span>Python</span><span>C / C++</span><span>PCB</span><span>Linux</span><span>Git</span></div></div>
    </aside>
`;

const bannerHTML = `<div class="banner-inner"><a class="brand" href="/" aria-label="Leslie Jury home"><span class="brand-mark">LJ</span><span><strong>Leslie Jury</strong><small>portfolio / embedded systems</small></span></a><span class="banner-label">BUILDING AT THE EDGE OF HARDWARE & SOFTWARE</span></div>`;

function setActivePage() {
    const path = window.location.pathname.toLowerCase();
    const page = path.includes("about") ? "about" : path.includes("contact") ? "contact" : path.includes("build-log") ? "build-log" : path.includes("project") ? "projects" : "home";
    document.querySelectorAll("[data-page]").forEach(link => {
        if (link.dataset.page === page) { link.classList.add("is-active"); link.setAttribute("aria-current", "page"); }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const topBanner = document.getElementById("top-banner");
    const leftSection = document.getElementById("left-section");
    const rightSection = document.getElementById("right-section");
    if (topBanner) topBanner.innerHTML = bannerHTML;
    if (leftSection) leftSection.innerHTML = leftSectionHTML;
    if (rightSection) rightSection.innerHTML = rightSectionHTML;
    setActivePage();
});
