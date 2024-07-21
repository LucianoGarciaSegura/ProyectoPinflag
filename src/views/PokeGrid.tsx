import React, {useEffect, useState} from "react";
import Modal from "../components/Modal"
import Pokedex from "../components/Pokedex"
import CardPokemon from "../components/CardPokemon";
import {typePokemon} from "../components/types"
import Pagination from "../components/Pagination";



const pokemonInitState = {
    id:-1,
    numero: -1,
    nombre: "",
    tipo: [],
    descripcion: "",
    imagen: null,
    peso: 0,
    altura: "",
    favorito: false,

}

let id = 0

// datos locales pokemones
let pokemones = [
    {
        id: id++,
        numero: 10,
        nombre: "Caterpie",
        tipo: ['bicho'],
        descripcion: "Caterpie, el Pokémon gusano. Para ahuyentar a sus enemigos, Caterpie suelta un olor desagradable por su antena roja. Muda la piel varias veces durante su crecimiento.",
        imagen: new URL("../assets/sprites/pokemones/Caterpie.gif", import.meta.url),
        peso: 2.9,
        altura: "0'3",
        favorito: false,
    },
    {
        id: id++,
        numero: 4,
        nombre: "Charmander",
        tipo: ['fuego'],
        descripcion: "Charmander, el Pokémon lagarto. La salud de Charmander puede medirse por la flama en la punta de su cola, la cual arde intensamente cuando tiene buena salud",
        imagen: new URL("../assets/sprites/pokemones/Charmander.gif", import.meta.url),
        peso: 8.6,
        altura: "0'6",
        favorito: false,
    },
    {
        id: id++,
        numero: 16,
        nombre: "Pidgey",
        tipo: ['normal', 'volador'],
        descripcion: "Pidgey es un Pokémon volador. De todos los Pokémon voladores es el más manso y fácil de capturar. Un objetivo perfecto para que el entrenador Pokémon principiante ponga a prueba sus habilidades con las Pokéball. Pidgey tiene un poder que crea tornados y también produce ataques de arena",
        imagen: new URL("../assets/sprites/pokemones/Pidgey.gif", import.meta.url),
        peso: 1.8,
        altura: "0'3",
        favorito: false,
    },
    {
        id: id++,
        numero: 7,
        nombre: "Squirtle",
        tipo: ['agua'],
        descripcion: "Squirtle. Esta pequeña tortuga Pokémon jala su largo cuello hacia su caparazón para lanzar increíbles ataques de agua con sorprendente alcance y exactitud. El golpe puede ser muy poderoso.",
        imagen: new URL("../assets/sprites/pokemones/Squirtle.gif", import.meta.url),
        peso: 9,
        altura: "0'5",
        favorito: false,
    },
    {
        id: id++,
        numero: 13,
        nombre: "Weedle",
        tipo: ['bicho','veneno'],
        descripcion: "Weedle. El aguijón en su cabeza le garantiza a cualquier atacante que recibirá un piquete justo en donde duele",
        imagen: new URL("../assets/sprites/pokemones/Weedle.gif", import.meta.url),
        peso: 3.2,
        altura: "0'3",
        favorito: false,
    },
    {
        id: id++,
        numero: 19,
        nombre: "Rattata",
        tipo: ['normal'],
        descripcion: "Pokémon del bosque. Le gusta el queso, las nueces, la fruta y las moras. También sale a campo abierto para robar comida de viajeros tontos",
        imagen: new URL("../assets/sprites/pokemones/Rattata.gif", import.meta.url),
        peso: 3.5,
        altura: "0'3",
        favorito: false,
    },
    {
        id: id++,
        numero: 21,
        nombre: "Spearow",
        tipo: ['normal', 'volador'],
        descripcion: "Al contrario del Pidgey el Spearow tiene un mal carácter. Es muy salvaje y a veces ataca a otros Pokémon y a los humanos",
        imagen: new URL("../assets/sprites/pokemones/Spearow.gif", import.meta.url),
        peso: 2.0,
        altura: "0'3",
        favorito: false,
    },
    {
        id: id++,
        numero: 23,
        nombre: "Ekans",
        tipo: ['veneno'],
        descripcion: "Siempre se esconde en la hierba. Como no tiene veneno al nacer, su mordisco es doloroso pero inofensivo",
        imagen: new URL("../assets/sprites/pokemones/Ekans.gif", import.meta.url),
        peso: 6.9,
        altura: "2'0",
        favorito: false,
    },
    {
        id: id++,
        numero: 25,
        nombre: "Pikachu",
        tipo: ['electrico'],
        descripcion: "Pikachu, el Pokémon ratón; tipo eléctrico. Las bolsas en las mejillas de Pikachu almacenan electricidad que se libera bajo amenaza. Los Pikachu machos y hembras tienen colas diferentes.",
        imagen: new URL("../assets/sprites/pokemones/Pikachu.gif", import.meta.url),
        peso: 6.0,
        altura: "0'4",
        favorito: false,
    },
    {
        id: id++,
        numero: 26,
        nombre: "Raichu",
        tipo: ['electrico'],
        descripcion: "Si sus mejillas se cargan por completo de electricidad, ambas orejas se levantarán.",
        imagen: new URL("../assets/sprites/pokemones/Raichu.gif", import.meta.url),
        peso: 30.0,
        altura: "0'8",
        favorito: false,
    },
    {
        id: id++,
        numero: 27,
        nombre: "Sandshrew",
        tipo: ['tierra'],
        descripcion: "Como odia el agua, vive en madrigueras muy profundas en zonas áridas. Puede hacerse una bola al instante.",
        imagen: new URL("../assets/sprites/pokemones/Sandshrew.gif", import.meta.url),
        peso: 12.0,
        altura: "0'6",
        favorito: false,
    },
    {
        id: id++,
        numero: 29,
        nombre: "Nidoran",
        tipo: ['veneno'],
        descripcion: "Aunque no es muy agresivo, castiga a sus enemigos con púas venenosas, si se siente amenazado.",
        imagen: new URL("../assets/sprites/pokemones/Nidoran.gif", import.meta.url),
        peso: 70.0,
        altura: "0'4",
        favorito: false,
    },
    {
        id: id++,
        numero: 35,
        nombre: "Clefairy",
        tipo: ['hada'],
        descripcion: "La luz de luna que guarda en las alas de su lomo parece darle la habilidad de flotar en el.",
        imagen: new URL("../assets/sprites/pokemones/Clefairy.gif", import.meta.url),
        peso: 7.5,
        altura: "0'6",
        favorito: false,
    },
    {
        id: id++,
        numero: 37,
        nombre: "Vulpix",
        tipo: ['fuego'],
        descripcion: "Si le ataca un enemigo más fuerte que él, finge estar herido para confundirle y huir.",
        imagen: new URL("../assets/sprites/pokemones/Vulpix.gif", import.meta.url),
        peso: 9.9,
        altura: "0'6",
        favorito: false,
    },
    {
        id: id++,
        numero: 39,
        nombre: "Jigglypuff",
        tipo: ['normal','hada'],
        descripcion: "Si le miras a sus bonitos y redondos ojos, cantará una relajante melodía con la que duerme al enemigo.",
        imagen: new URL("../assets/sprites/pokemones/Jigglypuff.gif", import.meta.url),
        peso: 5.5,
        altura: "0'5",
        favorito: false,
    },
    {
        id: id++,
        numero: 40,
        nombre: "Wigglytuff",
        tipo: ['normal','hada'],
        descripcion: "Tiene una piel muy fina. Ten cuidado de no enfadarle, o se inflará y golpeará con un golpe cuerpo.",
        imagen: new URL("../assets/sprites/pokemones/Wigglytuff.gif", import.meta.url),
        peso: 12.0,
        altura: "1'0",
        favorito: false,
    },
    {
        id: id++,
        numero: 41,
        nombre: "Zubat",
        tipo: ['veneno','volador'],
        descripcion: "Capaz de volar con seguridad en la oscuridad, emite ultrasonidos para detectar los obstáculos.",
        imagen: new URL("../assets/sprites/pokemones/Zubat.gif", import.meta.url),
        peso: 12.0,
        altura: "1'0",
        favorito: false,
    },
    {
        id: id++,
        numero: 42,
        nombre: "Golbat",
        tipo: ['veneno','volador'],
        descripcion: "Puede succionar mas de 300ml de sangre por golpe. Si toma demasiada, engorda mucho y vuela torpemente.",
        imagen: new URL("../assets/sprites/pokemones/Golbat.gif", import.meta.url),
        peso: 15.0,
        altura: "1'4",
        favorito: false,
    },
    {
        id: id++,
        numero: 43,
        nombre: "Oddish",
        tipo: ['planta','veneno'],
        descripcion: "Suele plantarse en el suelo durante el día. Por la noche se desplaza esparciendo semillas.",
        imagen: new URL("../assets/sprites/pokemones/Oddish.gif", import.meta.url),
        peso: 5.4,
        altura: "0'5",
        favorito: false,
    },
    {
        id: id++,
        numero: 44,
        nombre: "Gloom",
        tipo: ['planta','veneno'],
        descripcion: "Segrega una miel pegajosa. Aunque es dulce, su olor es demasiado repulsivo como para acercarse.",
        imagen: new URL("../assets/sprites/pokemones/Gloom.gif", import.meta.url),
        peso: 8.6,
        altura: "0'8",
        favorito: false,
    },
    {
        id: id++,
        numero: 45,
        nombre: "Vileplume",
        tipo: ['planta','veneno'],
        descripcion: "El capullo florece de golpe. Entonces, empieza a soltar polen alergénico y venenoso.",
        imagen: new URL("../assets/sprites/pokemones/Vileplume.gif", import.meta.url),
        peso: 18.6,
        altura: "1'2",
        favorito: false,
    },
    {
        id: id++,
        numero: 46,
        nombre: "Paras",
        tipo: ['bicho','planta'],
        descripcion: "El capullo florece de golpe. Entonces, empieza a soltar polen alergénico y venenoso.",
        imagen: new URL("../assets/sprites/pokemones/Paras.gif", import.meta.url),
        peso: 5.4,
        altura: "0'3",
        favorito: false,
    },
    {
        id: id++,
        numero: 47,
        nombre: "Parasect",
        tipo: ['bicho','planta'],
        descripcion: "Cuanto más grande sea la seta de su lomo, más resistentes serán las esporas que ésta suelta.",
        imagen: new URL("../assets/sprites/pokemones/Parasect.gif", import.meta.url),
        peso: 29.5,
        altura: "1'0",
        favorito: false,
    },
    {
        id: id++,
        numero: 48,
        nombre: "Venonat",
        tipo: ['bicho','veneno'],
        descripcion: "Rezuma veneno por todo su cuerpo. Atrapa y come pequeños bichos nocturnos atraídos por la luz.",
        imagen: new URL("../assets/sprites/pokemones/Venonat.gif", import.meta.url),
        peso: 30.0,
        altura: "1'0",
        favorito: false,
    },
    {
        id: id++,
        numero: 49,
        nombre: "Venomoth",
        tipo: ['bicho','veneno'],
        descripcion: "El polvo de sus alas es venenoso si es de color oscuro. Si es claro, causa parálisis.",
        imagen: new URL("../assets/sprites/pokemones/Venomoth.gif", import.meta.url),
        peso: 12.5,
        altura: "1'5",
        favorito: false,
    },
    {
        id: id++,
        numero: 50,
        nombre: "Diglett",
        tipo: ['tierra'],
        descripcion: "Si un Diglett excava un terreno, lo deja perfectamente arado y preparado para sembrarlo.",
        imagen: new URL("../assets/sprites/pokemones/Diglett.gif", import.meta.url),
        peso: 0.8,
        altura: "0'2",
        favorito: false,
    },
    {
        id: id++,
        numero: 51,
        nombre: "Dugtrio",
        tipo: ['tierra'],
        descripcion: "Muy poderosos, pueden excavar hasta los terrenos más duros a una profundidad de más de 100 km.",
        imagen: new URL("../assets/sprites/pokemones/Dugtrio.gif", import.meta.url),
        peso: 33.3,
        altura: "0'7",
        favorito: false,
    },
    {
        id: id++,
        numero: 52,
        nombre: "Meowth",
        tipo: ['normal'],
        descripcion: "Le encanta todo lo que brilla. Adora especialmente las monedas que recoge y va amontonando.",
        imagen: new URL("../assets/sprites/pokemones/Meowth.gif", import.meta.url),
        peso: 4.2,
        altura: "0'4",
        favorito: false,
    },
    {
        id: id++,
        numero: 53,
        nombre: "Persian",
        tipo: ['normal'],
        descripcion: "Sus ágiles músculos le permiten moverse sin hacer ruido. Ataca al instante.",
        imagen: new URL("../assets/sprites/pokemones/Persian.gif", import.meta.url),
        peso: 32.0,
        altura: "1'0",
        favorito: false,
    },
    {
        id: id++,
        numero: 54,
        nombre: "Psyduck",
        tipo: ['agua'],
        descripcion: "Si su jaqueca crónica empeora, podría mostrar extraños poderes. Parece que después no recuerda nada.",
        imagen: new URL("../assets/sprites/pokemones/Psyduck.gif", import.meta.url),
        peso: 19.6,
        altura: "0'8",
        favorito: false,
    },
    {
        id: id++,
        numero: 251,
        nombre: "Celebi",
        tipo: ['psiquico','planta'],
        descripcion: "Se dice que cuando Celebi se interna en el bosque, deja tras de sí un huevo traído del futuro.",
        imagen: new URL("../assets/sprites/pokemones/Celebi.gif", import.meta.url),
        peso: 5.0,
        altura: "0'6",
        favorito: false,
    },
    {
        id: id++,
        numero: 38,
        nombre: "Ikkakumon",
        tipo: ['agua'],
        descripcion: "Pocos saben de este pokemon, pero dicen que es el mas poderoso de todos.",
        imagen: new URL("../assets/sprites/pokemones/Ikkakumon.gif", import.meta.url),
        peso: 67.0,
        altura: "4'6",
        favorito: false,
    },
    {
        id: id++,
        numero: 55,
        nombre: "Golduck",
        tipo: ['agua'],
        descripcion: "Aparece en ríos al anochecer. Puede usar poderes telequinéticos si su frente brilla misteriosamente.",
        imagen: new URL("../assets/sprites/pokemones/Golduck.gif", import.meta.url),
        peso: 76.6,
        altura: "1'7",
        favorito: false,
    },
    {
        id: id++,
        numero: 56,
        nombre: "Mankey",
        tipo: ['lucha'],
        descripcion: "Es peligroso acercarse si se enfada sin razón aparente, ya que no distingue entre amigos y enemigos.",
        imagen: new URL("../assets/sprites/pokemones/Mankey.gif", import.meta.url),
        peso: 28.0,
        altura: "0'5",
        favorito: false,
    },
    {
        id: id++,
        numero: 57,
        nombre: "Primeape",
        tipo: ['lucha'],
        descripcion: "Se pone furioso si nota que alguien le está mirando. Persigue a cualquiera que le vea enfadado.",
        imagen: new URL("../assets/sprites/pokemones/Primeape.gif", import.meta.url),
        peso: 32.0 ,
        altura: "1'0",
        favorito: false,
    },
    {
        id: id++,
        numero: 58,
        nombre: "Growlithe",
        tipo: ['fuego'],
        descripcion: "Extremadamente fiel, ladrará sin temor a cualquier enemigo para defender a su entrenador.",
        imagen: new URL("../assets/sprites/pokemones/Growlithe.gif", import.meta.url),
        peso: 19.0 ,
        altura: "0'7",
        favorito: false,
    },
    {
        id: id++,
        numero: 59,
        nombre: "Arcanine",
        tipo: ['fuego'],
        descripcion: "Su magnífico ladrido transmite majestuosidad. Todo el que lo escuche no podrá evitar adularlo.",
        imagen: new URL("../assets/sprites/pokemones/Arcanine.gif", import.meta.url),
        peso: 155.0 ,
        altura: "1'9",
        favorito: false,
    },
    {
        id: id++,
        numero: 60,
        nombre: "Poliwag",
        tipo: ['agua'],
        descripcion: "La dirección de la espiral de su tripa cambia por zonas. Se cree que le influye el ecuador.",
        imagen: new URL("../assets/sprites/pokemones/Poliwag.gif", import.meta.url),
        peso: 12.4 ,
        altura: "0'6",
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
        }).filter((pokemon, index)=>{
            if (index >= (page) * pageAmount && index < (page) * parseInt(String(pageAmount)) + parseInt(String(pageAmount))) {
                return true
            }
            return false
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
                                        <li key={pokemon.id} className="list-group-item">
                                            <CardPokemon
                                                pokemon={pokemon}
                                                onClick={() => {
                                                    setSelectedPokemon(pokemon)
                                                }}
                                                onFavorite={(id: number) => {
                                                    setOgList(ogList.map(pokemon => {
                                                        if (pokemon.id == id) {
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
                                        <li key={pokemon.id} className="list-group-item">
                                            <CardPokemon
                                                pokemon={pokemon}
                                                onClick={() => {
                                                    setSelectedPokemon(pokemon)
                                                }}
                                                onFavorite={(id: number) => {
                                                    setOgList(ogList.map(pokemon => {
                                                        if (pokemon.id == id) {
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
                                        <li key={pokemon.id} className="list-group-item">
                                            <CardPokemon
                                                pokemon={pokemon}
                                                onClick={() => {
                                                    setSelectedPokemon(pokemon)
                                                }}
                                                onFavorite={(id: number) => {
                                                    setOgList(ogList.map(pokemon => {
                                                        if (pokemon.id == id) {
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
                        paginas={Math.ceil(listLength / pageAmount)}
                        onChange={(pag: number) => {
                            setPage(pag)
                        }}
                        onChangeAmount={(e: number) => {
                            setPageAmount(e)
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