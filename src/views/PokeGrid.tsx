import {useState} from "react";
import Modal from "../components/Modal"
import Pokedex from "../components/Pokedex"
import CardPokemon from "../components/CardPokemon";
import typePokemon from "../components/types"



const pokemonInitState = {
    numero: -1,
    nombre: "",
    tipo: [],
    descripcion: "",
    imagen: null,
    peso: 0,
    altura: 0,

}

interface Props {
    pokemones: typePokemon[]
}

function PokeGrid({pokemones}: Props) {

    const [selectedPokemon, setSelectedPokemon] = useState<typePokemon>(pokemonInitState)

    return (
        <>
            <div style={{"position": "fixed", "overflow":"scroll" ,"height":"100%", "width":"100%"}}>
                <div className="container">
                    <h1>List</h1>
                    <div className="row justify-content-md-center">
                        <div className="col">
                            {pokemones.map((pokemon,index) => {
                                if ((index+3)%3 == 0)
                                return (
                                    <li key={pokemon.numero} onClick={() => {
                                        setSelectedPokemon(pokemon)
                                    }} className="list-group-item">
                                        <CardPokemon pokemon={pokemon}/>
                                    </li>
                                )
                            })}
                        </div>
                        <div className="col ">
                            {pokemones.map((pokemon,index) => {
                                if ((index+2)%3 == 0)
                                    return (
                                        <li key={pokemon.numero} onClick={() => {
                                            setSelectedPokemon(pokemon)
                                        }} className="list-group-item">
                                            <CardPokemon pokemon={pokemon}/>
                                        </li>
                                    )
                            })}
                        </div>
                        <div className="col ">
                            {pokemones.map((pokemon,index) => {
                                if ((index+1)%3 == 0)
                                    return (
                                        <li key={pokemon.numero} onClick={() => {
                                            setSelectedPokemon(pokemon)
                                        }} className="list-group-item">
                                            <CardPokemon pokemon={pokemon}/>
                                        </li>
                                    )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {selectedPokemon != pokemonInitState && (
                <Modal
                    titulo={"Pokemon seleccionado"}
                    closeModal={() => setSelectedPokemon(pokemonInitState)}
                    body={
                        <Pokedex
                            datos={selectedPokemon}
                        />}
                />)}
        </>
    )
}

export default PokeGrid