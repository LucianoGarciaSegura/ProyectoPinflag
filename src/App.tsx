import PokeGrid from "./views/PokeGrid";

function App() {

    let pokemones = [
        {
            numero: 1,
            nombre: "ikakummon",
            tipo: ['agua', 'fuego'],
            descripcion: "pulento pokemon este",
            imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
            peso: 30,
            altura: 2,
        },
        {
            numero: 2,
            nombre: "cosomon",
            tipo: ['tierra', 'electrico'],
            descripcion: "poquemón que da la tierra",
            imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
            peso: 36,
            altura: 5,
        },
        {
            numero: 3,
            nombre: "ikakummon",
            tipo: ['agua'],
            descripcion: "creo que este es de otro mono",
            imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
            peso: 69,
            altura: 4,
        },
        {
            numero: 4,
            nombre: "ikakummon",
            tipo: ['agua'],
            descripcion: "creo que este es de otro mono",
            imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
            peso: 69,
            altura: 4,
        },
        {
            numero: 5,
            nombre: "ikakummon",
            tipo: ['agua'],
            descripcion: "creo que este es de otro mono",
            imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
            peso: 69,
            altura: 4,
        },
        {
            numero: 6,
            nombre: "ikakummon",
            tipo: ['agua'],
            descripcion: "creo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro mono",
            imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
            peso: 69,
            altura: 4,
        },
        {
            numero: 7,
            nombre: "ikakummon",
            tipo: ['agua'],
            descripcion: "creo que este es de otro mono",
            imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
            peso: 69,
            altura: 4,
        },
    ]

    return (
        <div><PokeGrid pokemones={pokemones}/></div>
    )
}

export default App;