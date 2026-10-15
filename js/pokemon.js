const typeColors = {
    fire: "#f08030", water: "#6890f0", grass: "#78c850", electric: "#f8d030",
    psychic: "#f85888", ice: "#98d8d8", dragon: "#7038f8", dark: "#705848",
    fairy: "#ee99ac", normal: "#a8a878", fighting: "#c03028", poison: "#a040a0",
    ground: "#e0c068", flying: "#a890f0", bug: "#a8b820", rock: "#b8a038",
    ghost: "#705898", steel: "#b8b8d0"
};

async function getPokemon() {
    const input = document.getElementById("pokemonInput").value.trim().toLowerCase();
    const name = document.getElementById("name");
    const type = document.getElementById("type");
    const sprite = document.getElementById("sprite");
    const card = document.getElementById("pokemon-card");
    if (!input) { name.textContent = "Try a Pokémon name"; type.textContent = ""; return; }
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        if (!response.ok) throw new Error("Pokémon not found");
        const data = await response.json();
        name.textContent = data.name;
        sprite.src = data.sprites.front_default;
        sprite.alt = `${data.name} sprite`;
        const types = data.types.map(item => item.type.name);
        type.textContent = `Type: ${types.join(", ")}`;
        card.style.setProperty("--pokemon-accent", typeColors[types[0]] || "#ff65ab");
        card.classList.add("has-result");
    } catch (error) {
        name.textContent = "Pokémon not found";
        type.textContent = "Try a name like Pikachu, Palkia, or Bulbasaur.";
        sprite.removeAttribute("src");
        card.classList.remove("has-result");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("pokemonInput");
    if (input) input.addEventListener("keydown", event => { if (event.key === "Enter") getPokemon(); });
});
