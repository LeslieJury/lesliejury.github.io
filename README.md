# Leslie Jury Portfolio

Personal portfolio website for Leslie Jury, focused on embedded systems, hardware-software integration, programming, and creative web projects.

## About the site

The site is a static portfolio built with HTML, CSS, and vanilla JavaScript. It includes project case studies, a curated Build Log featuring LinkedIn updates, an interactive Pokémon API viewer, and responsive layouts for desktop and mobile screens.

## Main sections

- **Home** – Introduction, current work, and featured projects.
- **About** – Background, interests, skills, and creative influences.
- **Projects** – Searchable project gallery with filters for strengths such as C, STM32, Hardware, Embedded Systems, Web Development, and Software.
- **Small Projects** – Pokémon Viewer, PSP Modding, Subarray Algorithm, and Neocities Website.
- **Build Log** – Small experiments, learning updates, and progress posts from LinkedIn.
- **Contact** – Contact information and professional links.

## Featured project areas

- Embedded C and STM32 development
- PCB design and electronics
- Arduino and LED matrix projects
- Raspberry Pi and Linux hardware
- JavaScript and API-based web applications
- Python algorithms and class projects
- Creative front-end and portfolio design

## Project structure

```text
.
├── index.html             # Homepage
├── about.html             # About page
├── projects.html          # Searchable project gallery
├── build-log.html         # LinkedIn progress timeline
├── contact.html           # Contact page
├── css/home.css           # Shared site styles and responsive rules
├── js/components.js       # Shared navigation and profile panel
├── js/projects.js         # Project data, search, and filters
├── js/pokemon.js          # Pokémon API viewer behavior
├── projects/              # Individual project case studies
├── images/                # Project and profile images
└── files/                 # Resume and project reports
```

## Run locally

Because the site uses root-relative paths such as `/images/...`, serve it through a local web server instead of opening the HTML files directly.

### VS Code Live Server

1. Open the project folder in VS Code.
2. Start Live Server from `index.html`.
3. Visit the local URL shown by the extension.

### Python

```bash
python -m http.server 5500
```

Then open [http://localhost:5500](http://localhost:5500).

## Notes

- LinkedIn posts must be public for their embedded content to appear.
- The Pokémon Viewer uses the public PokéAPI service.
- PDF reports are embedded directly into their project pages when available.
- The site has no build step or package dependency requirements.

## License

See [LICENSE](LICENSE) for the project license.
