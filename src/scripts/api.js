import { CreatePokeName } from "./app.js"

let pokemons;
let locations
//https://pokeapi.co/api/v2/pokemon/ditto





   const PokeApi = (input) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
    .then(response => 
         response.json())
    .then((pokeData) => {
       
        console.log(pokeData.name)
        
         pokemons = {
            name: pokeData.name,
            id: pokeData.id,
            image: pokeData.sprites['front_default'],
            image2: pokeData.sprites['back_default'],
            image3: pokeData.sprites['front_shiny'],
            image4: pokeData.sprites['back_shiny'],
            type: pokeData.types.map((type) => type.type.name).join(', '),
            ability: pokeData.abilities.map((ability) => ability.ability.name),
            move: pokeData.moves.map((move) => move.move.name)
            
        };
        console.log(pokemons)
        CreatePokeName();
})
}
//     let PokeRandomApi = () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/`)
//     .then(response => 
//          response.json())
//     .then((pokeData) => {
       
//         console.log(pokeData.name)
        
//          pokemons = {
//             name: pokeData.name,
//             id: pokeData.id,
//             image: pokeData.sprites['front_default'],
//             image2: pokeData.sprites['back_default'],
//             image3: pokeData.sprites['front_shiny'],
//             image4: pokeData.sprites['back_shiny'],
//             type: pokeData.types.map((type) => type.type.name).join(', '),
//             ability: pokeData.abilities.map((ability) => ability.ability.name),
//             move: pokeData.moves.map((move) => move.move.name)
            
//         };
//         console.log(pokemons)
//         CreatePokeName();
// })
// }
//     let PokeLoct = (input) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/encounters${input}`)
//     .then(response => 
//          response.json())
//     .then((pokeData) => {
       
//         console.log(pokeData.name)
        
//          locations = {
//             location: pokeData.location_area.name
            
//         };
//         console.log(locations)
//         CreatePokeName();
// })
// }

// async function GetPokeData(){
//     let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     return response.json()
//     .then(pokeData => console.log(pokeData.name))
// }


export{PokeApi, pokemons}