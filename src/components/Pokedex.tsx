import React, {ReactElement} from "react";
import {typePokemon} from "./types";
import "./Pokedex.css";

function PokedexDetail({pokemon}: {
    pokemon: typePokemon
}) {

    //Guarda los dieferentes colores dependiendo de el tipo de pokemon
    const typeColors = {
        fuego: 'red',
        tierra: 'green',
        agua: 'blue',
        electrico: 'grey',
    };
    return (
        <>
            <div className="pokedex">
                <div className="pokedex-body">
                    <div className="pokedex-content">
                        <img className="imgLogo" src={pokemon.imagen}/>
                        <div className="pokedex-content">
                            <div>
                                <div className="rectangle-container">
                                    <img className="imgPokeball" style={{"width": "20%"}}
                                         src={"src/assets/sprites/pokeball.png"}/>
                                    <h3>{pokemon.nombre}</h3>
                                </div>
                                <div className="rectangle-container">
                                    {pokemon.tipo.map((tipo) => {
                                        return (
                                            <div key={tipo} className="rectangle"
                                                 style={{"backgroundColor": typeColors[tipo]}}>
                                                {tipo}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="col" style={{"textAlign": "justify"}}>
                                        <h6>HT</h6>
                                        <h6>WT</h6>
                                    </div>
                                    <div className="col" style={{"textAlign": "justify"}}>
                                        <h6>{pokemon.altura}</h6>
                                        <h6>{pokemon.peso}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pokedex-content" style={{"border": "2px solid grey", "justifyContent": "center",}}>
                        <div className="pokedex-detail">
                            <p>{pokemon.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PokedexDetail