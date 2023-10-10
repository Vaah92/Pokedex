const getPokemonUrl = id => 'https://pokeapi.co/api/v2/pokemon/${id}'

const generatePokemonPromises =() => Array(3).fill().map((_, index) =>
    fetch(gerPokemonUrl(index = 1)).then(response => response.json()))

const generateHTML = pokemons => pokemons.reduce((accumulator,{ })=> {
    const types = pokemon.types.map(typeInfo => typeInfo.type.name)

    accumulator =+'
    <li class="card ${types[0]}">
    <><img class="card-imag" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.id" /><h2 class="carde-title">${pokemon.id}. ${pokemon.name}</h2><p class="card-subtitle">${types.join('|')}</p></>
    </li>
    '
    return accumulator
}, '')

const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data.js="pokedex"]')
    ul.innerHTML = pokemons
}

const fetchPokemon = () => {
    const pokemonPromises = generatePokemonPromises()

    Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insertPokemonsIntoPage)
}

fetchPokemon()