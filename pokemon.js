async function getPokemon() {
  const input = document.getElementById("pokemonInput").value.toLowerCase();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await response.json();

    // Update UI
    document.getElementById("name").textContent = data.name;
    document.getElementById("sprite").src = data.sprites.front_default;

    const types = data.types.map(t => t.type.name).join(", ");
    document.getElementById("type").textContent = "Type: " + types;

  } catch (error) {
    alert("Pokémon not found!");
  }
}
const typeColors = {
  fire: "#f08030",
  water: "#6890f0",
  grass: "#78c850",
  electric: "#f8d030",
  psychic: "#f85888",
  ice: "#98d8d8",
  dragon: "#7038f8",
  dark: "#705848",
  fairy: "#ee99ac",
  normal: "#a8a878"
};