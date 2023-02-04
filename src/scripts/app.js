import { PokeApi, pokemons } from "./api.js";

let searchBtn = document.getElementById('searchBtn');
let rBtn = document.getElementById('rBtn');
let searchPoke = document.getElementById('searchPoke');
let pokeMonName = document.getElementById('pokeMonName');
// let pokeType = document.getElementById('pokeType');
// let pokeAblit = document.getElementById('pokeAblit');
// let pokeMoves = document.getElementById('pokeMoves');
let pokeImg = document.getElementById('pokeImg');
let pokeBackImg = document.getElementById('pokeBackImg');
let pokeInfo = document.getElementById('pokeInfo');
let pokeShineImg = document.getElementById('pokeShineImg');
let pokeShineBackImg = document.getElementById('pokeShineBackImg');

let pNameTxt;
let typeTxt;
let abiliTXt;
let pokeNameTxt;
let pokemonsImage;
let pokemonsBckImage;
let pokemonsShImage;
let pokemonsBckShImage;
PokeApi(1);
// searchBtn.addEventListener('click', () =>{
    
// })
searchBtn.addEventListener('click', () =>{
    PokeApi(searchPoke.value);
    console.log(searchPoke.value)

    pokeMonName.removeChild(pNameTxt);
    pokeInfo.removeChild(typeTxt);
    pokeInfo.removeChild(abiliTXt);
    pokeInfo.removeChild(pokeNameTxt);
    pokeImg.removeChild(pokemonsImage);
    pokeBackImg.removeChild(pokemonsBckImage);
    pokeShineImg.removeChild(pokemonsShImage);
    pokeShineBackImg.removeChild(pokemonsBckShImage);
})


function CreatePokeName(){
    
     pNameTxt = document.createElement('p');
    pNameTxt.textContent = pokemons.name;

    pokeMonName.appendChild(pNameTxt);


     typeTxt = document.createElement('p');
    typeTxt.textContent ='Type: ' + pokemons.type;
    typeTxt.className = 'typeStyles txtFont'
    pokeInfo.appendChild(typeTxt);

     abiliTXt = document.createElement('p');
    abiliTXt.textContent = 'Abilities: ' + pokemons.ability
    abiliTXt.className ='typeStyles txtFont'
    pokeInfo.appendChild(abiliTXt);

     pokeNameTxt = document.createElement('pokeNameTxt');
    pokeNameTxt.textContent = 'Moves: ' + pokemons.move
    pokeNameTxt.className = 'typeStyles2 txtFont'

    pokeInfo.appendChild(pokeNameTxt)

     pokemonsImage = document.createElement('img')
    pokemonsImage.src = pokemons.image;
    pokemonsImage.className = 'p';
    pokeImg.appendChild(pokemonsImage)

     pokemonsBckImage = document.createElement('img')
     pokemonsBckImage.src = pokemons.image2;
     pokemonsBckImage.className = 'p';
     

     pokeBackImg.appendChild(pokemonsBckImage);
     
     pokemonsShImage = document.createElement('img')
     pokemonsShImage.src = pokemons.image3;
     pokemonsShImage.className = 'p';
     pokeShineImg.appendChild(pokemonsShImage);


     pokemonsBckShImage = document.createElement('img')
     pokemonsBckShImage.src = pokemons.image4;
     pokemonsBckShImage.className = 'p';
     pokeShineBackImg.appendChild(pokemonsBckShImage);


}

export{CreatePokeName}