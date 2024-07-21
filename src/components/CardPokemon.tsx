import React, {ReactElement, useState} from "react";
import {typePokemon} from "../components/types"
import "./CardPokemon.css";
import {ClipLoader} from "react-spinners";


function CardPokemon({pokemon, onClick, onFavorite}: {
    pokemon: typePokemon,
    onClick: Function,
    onFavorite: Function,
}) {

    let loadingTime = Math.floor(Math.random() * 3000 + 2000)
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false);
    }, (loadingTime)
    );

    //Guarda los dieferentes colores dependiendo de el tipo de pokemon
    const typeColors = {
        fuego: 'red',
        tierra: 'green',
        agua: 'blue',
        electrico: 'grey',
    };

    return (
        <div className="card-container">
            <div className="card">
                {!isLoading ?
                    <div className="card-body">
                        <div className="circle-container" style={{"left":"82%","top":"2%"}} >
                            <input className="star" type="checkbox"
                                   onClick={()=>{onFavorite(pokemon.numero)}}
                                   defaultChecked={pokemon.favorito}
                                  // onChange={e => {}}
                            />
                        </div>
                        <div className="circle-container">
                            {pokemon.tipo.map((tipo) => {
                                return (
                                    <div key={tipo} className="circle" style={{"backgroundColor": typeColors[tipo]}}/>
                                )
                            })}
                        </div>
                        <img src={pokemon.imagen} onClick={()=>{onClick()}}/>
                        <div className="card-content" onClick={()=>{onClick()}}>
                            <h3>{pokemon.nombre}</h3>
                            <p>{pokemon.descripcion}</p>
                        </div>
                    </div> :
                    <div className="card-body" style={{"backdropFilter": "blur(5px)"}}>
                        <ClipLoader
                            color={"white"}
                            //loading={loading}
                            //cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default CardPokemon