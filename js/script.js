const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');


console.log(pokemonName)
const fetchPokemon = async (pokemon) => { //Chamando a API, é assincrona, então tem que ser feita antes de passar pro próximo código

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //await é pra esperar, por isso precisa do async;

    const data = await APIResponse.json();
    return data;

}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);


    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;

}
renderPokemon('12')
