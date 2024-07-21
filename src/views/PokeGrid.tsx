import React, {useEffect, useState} from "react";
import Modal from "../components/Modal"
import Pokedex from "../components/Pokedex"
import CardPokemon from "../components/CardPokemon";
import {typePokemon} from "../components/types"
import Pagination from "../components/Pagination";


const pokemonInitState = {
    numero: -1,
    nombre: "",
    tipo: [],
    descripcion: "",
    imagen: null,
    peso: 0,
    altura: "",
    favorito: false,

}


let pokemones = [
    {
        numero: 1,
        nombre: "ikakummon",
        tipo: ['agua', 'fuego'],
        descripcion: "pulento pokemon este",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 30,
        altura: "4'4",
        favorito: true,
    },
    {
        numero: 2,
        nombre: "cosomon",
        tipo: ['tierra', 'electrico'],
        descripcion: "poquemón que da la tierra",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/c/c3/Charmeleon_NB.gif",
        peso: 36,
        altura: "4'4",
        favorito: true,
    },
    {
        numero: 3,
        nombre: "esnorlax",
        tipo: ['agua', 'fuego'],
        descripcion: "toi guaton",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: true,
    },
    {
        numero: 4,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 5,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 6,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro mone otro monocreo que este es de otro mone otro monocreo que este es de otro mone otro monocreo que este es de otro mone otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro monocreo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 7,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 8,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 9,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 10,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 11,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 12,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 13,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 14,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 15,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 16,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 17,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 18,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 19,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 20,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 21,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 22,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 23,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 24,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 25,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 26,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 27,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 28,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 29,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 30,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 31,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 32,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 33,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
    {
        numero: 34,
        nombre: "ikakummon",
        tipo: ['agua'],
        descripcion: "creo que este es de otro mono",
        imagen: "https://static.wikia.nocookie.net/espokemon/images/f/f1/Charmander_NB.gif",
        peso: 69,
        altura: "4'4",
        favorito: false,
    },
]


function PokeGrid() {

    const [selectedPokemon, setSelectedPokemon] = useState<typePokemon>(pokemonInitState)
    const [list, setList] = useState(pokemones)
    const [ogList, setOgList] = useState(pokemones)
    const [listLength, setListLength] = useState(0)
    const [page, setPage] = useState(0)
    const [pageAmount, setPageAmount] = useState(10)
    const [search, setSearch] = useState({
        search: "",
        filtro: "",
        favorito: false,
    })


    useEffect(() => {

        let listlength = 0
        ogList.forEach((pokemon, index) => {
            if (!search.search && !search.filtro && !search.favorito) {
                listlength++
            } else {
                if (pokemon.nombre.toUpperCase().indexOf(search.search.toUpperCase()) == -1) {
                    return false
                }
                if (search.filtro && !pokemon.tipo.map(tipo => tipo.toUpperCase()).includes(search.filtro.toUpperCase())) {
                    return false
                }
                if (search.favorito && !pokemon.favorito) {
                    return false
                }
                listlength++
            }
        })
        setListLength(
            listlength
        );

        setList(ogList.filter((pokemon, index) => {
            if (index >= (page) * pageAmount && index < (page) * parseInt(pageAmount) + parseInt(pageAmount)) {
                if (!search.search && !search.filtro && !search.favorito) {
                    return true
                }
                if (pokemon.nombre.toUpperCase().indexOf(search.search.toUpperCase()) == -1) {
                    return false
                }
                if (search.filtro && !pokemon.tipo.map(tipo => tipo.toUpperCase()).includes(search.filtro.toUpperCase())) {
                    return false
                }
                if (search.favorito && !pokemon.favorito) {
                    return false
                }
                return true
            } else {
                return false
            }
        }))
    }, [search, page, pageAmount])

    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <>
            <div style={{
                "position": "fixed",
                "backgroundColor": "#293646",
                "overflow": "scroll",
                "height": "100%",
                "width": "100%"
            }}>
                <div className="container" style={{"padding": "20px"}}>
                    <h1>PokeGrid</h1>
                    <div className="row align-content-start">
                        <div className="col" style={{"marginTop": "20px"}}>
                            <h5>Buscador</h5>
                            <input style={{"width": "50%"}}
                                   onChange={(e) => {
                                       setSearch({
                                           ...search,
                                           search: e.target.value
                                       })
                                       setPage(0)
                                   }}

                            />
                        </div>
                        <div className="col" style={{"marginTop": "20px"}}>
                            <h5>Tipo Pokemon</h5>

                            <select style={{"width": "50%"}} name="tipo" id="tipo-select"
                                    onChange={(e) => {
                                        setSearch({
                                            ...search,
                                            filtro: e.target.value
                                        })
                                        setPage(0)
                                    }}
                            >
                                <option value="">--todos--</option>
                                <option value="Acero">Acero</option>
                                <option value="Agua">Agua</option>
                                <option value="Bicho">Bicho</option>
                                <option value="Dragon">Dragon</option>
                                <option value="Electrico">Electrico</option>
                                <option value="Fantasma">Fantasma</option>
                                <option value="Fuego">Fuego</option>
                                <option value="Hada">Hada</option>
                                <option value="Hielo">Hielo</option>
                                <option value="Lucha">Lucha</option>
                                <option value="Normal">Normal</option>
                                <option value="Planta">Planta</option>
                                <option value="Psiquico">Psiquico</option>
                                <option value="Roca">Roca</option>
                                <option value="Siniestro">Siniestro</option>
                                <option value="Tierra">Tierra</option>
                                <option value="Veneno">Veneno</option>
                                <option value="Volador">Volador</option>
                            </select>
                        </div>
                        <div className="col" style={{"marginTop": "20px", "cursor": "pointer"}}
                             onClick={() => {
                                 setSearch({
                                     ...search,
                                     favorito: !search.favorito
                                 })
                                 setPage(0)
                             }}
                        >
                            <h5>Fav
                                <input className="star" type="checkbox"
                                       checked={search.favorito}
                                       onChange={() => {
                                       }}
                                />
                            </h5>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        {/*Se crean 3 columnas y se divide en contenido entre ellas*/}
                        <div className="col">
                            {list.map((pokemon, index) => {
                                if ((index + 3) % 3 == 0)
                                    return (
                                        <li key={pokemon.numero} className="list-group-item">
                                            <CardPokemon
                                                pokemon={pokemon}
                                                onClick={() => {
                                                    setSelectedPokemon(pokemon)
                                                }}
                                                onFavorite={(numero) => {
                                                    setOgList(ogList.map(pokemon => {
                                                        if (pokemon.numero == numero) {
                                                            return {
                                                                ...pokemon,
                                                                favorito: !pokemon.favorito
                                                            }
                                                        } else {
                                                            return pokemon
                                                        }
                                                    }))
                                                }}
                                            />
                                        </li>
                                    )
                            })}
                        </div>
                        <div className="col ">
                            {list.map((pokemon, index) => {
                                if ((index + 2) % 3 == 0)
                                    return (
                                        <li key={pokemon.numero} className="list-group-item">
                                            <CardPokemon
                                                pokemon={pokemon}
                                                onClick={() => {
                                                    setSelectedPokemon(pokemon)
                                                }}
                                                onFavorite={(numero) => {
                                                    setOgList(ogList.map(pokemon => {
                                                        if (pokemon.numero == numero) {
                                                            return {
                                                                ...pokemon,
                                                                favorito: !pokemon.favorito
                                                            }
                                                        } else {
                                                            return pokemon
                                                        }
                                                    }))
                                                }}
                                            />
                                        </li>
                                    )
                            })}
                        </div>
                        <div className="col ">
                            {list.map((pokemon, index) => {
                                if ((index + 1) % 3 == 0)
                                    return (
                                        <li key={pokemon.numero} className="list-group-item">
                                            <CardPokemon
                                                pokemon={pokemon}
                                                onClick={() => {
                                                    setSelectedPokemon(pokemon)
                                                }}
                                                onFavorite={(numero) => {
                                                    setOgList(ogList.map(pokemon => {
                                                        if (pokemon.numero == numero) {
                                                            return {
                                                                ...pokemon,
                                                                favorito: !pokemon.favorito
                                                            }
                                                        } else {
                                                            return pokemon
                                                        }
                                                    }))
                                                }}
                                            />
                                        </li>
                                    )
                            })}
                        </div>
                    </div>
                    <Pagination
                        paginas={Math.round(listLength / pageAmount)}
                        onChange={(pag) => {
                            setPage(parseInt(pag))
                        }}
                        onChangeAmount={(e) => {
                            setPageAmount(parseInt(e))
                            setPage(0)
                        }}
                    />
                </div>
            </div>
            {selectedPokemon != pokemonInitState && (
                <Modal
                    titulo={"Detalle Pokemon"}
                    closeModal={() => setSelectedPokemon(pokemonInitState)}
                >
                    <Pokedex
                        pokemon={selectedPokemon}
                    />
                </Modal>)}
        </>
    )
}

export default PokeGrid