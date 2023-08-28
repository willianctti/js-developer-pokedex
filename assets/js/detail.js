// detail.js
const pokemonDetail = document.getElementById('pokemonDetail');
const urlParams = new URLSearchParams(window.location.search);
const pokemonNumber = urlParams.get('number');

pokeApi.getPokemonDetailByNumber(pokemonNumber).then((selectedPokemon) => {
    if (selectedPokemon) {
        const detailHtml = `
            <div class="pokemon-detail">
                <h2>#${selectedPokemon.number} - ${selectedPokemon.name}</h2>
                <div class="detail">
                    <ol class="types">
                        ${selectedPokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${selectedPokemon.photo}" alt="${selectedPokemon.name}">
                </div>
            </div>
        `;

        pokemonDetail.innerHTML = detailHtml;
    } else {
        pokemonDetail.innerHTML = '<p>Pokemon not found.</p>';
    }
});

// detail.js
const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});
