import React, {ReactElement, useState} from "react";
import {typePokemon} from "../components/types"
import "./CardPokemon.css";
import {ClipLoader} from "react-spinners";


function CardPokemon({pokemon, onClick, onFavorite}: {
    pokemon: typePokemon,
    onClick: Function,
    onFavorite: Function,
}) {

    let loadingTime = Math.floor(Math.random() * 2000 + 1000)
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false);
    }, (loadingTime)
    );

    const typeColors: Record<string, string> = {
        'acero': '#008080',
        'agua': '#0066ff',
        'bicho': '#8A9A5B',
        'dragon': '#0000FF',
        'electrico': '#ffcc00',
        'fantasma': '#490049',
        'fuego': '#FF0000',
        'hada': '#ff81eb',
        'hielo': '#00e2ff',
        'lucha': '#ff7300',
        'normal': '#969696',
        'planta': '#327700',
        'psíquico': '#d50079',
        'roca': '#947662',
        'siniestro': '#232323',
        'tierra': '#6b2f10',
        'veneno': '#6a3172',
        'volador': '#2d9db0',
    };

    return (
        <div className="card-container">
            <div className="card">
                {!isLoading ?
                    <div className="card-body">
                        <div className="circle-container" style={{"left":"82%","top":"2%"}} >
                            <input className="star" type="checkbox"
                                   onClick={()=>{onFavorite(pokemon.id)}}
                                   defaultChecked={pokemon.favorito}
                                  // onChange={e => {}}
                            />
                        </div>
                        <div className="circle-container">
                            {pokemon.tipo.map((tipo) => {
                                return (
                                    <div key={tipo} className="circle" style={{"backgroundColor": typeColors[String(tipo)]}}/>
                                )
                            })}
                        </div>
                        <img src={pokemon.imagen} onClick={()=>{onClick()}}/>
                        <div className="card-content" onClick={()=>{onClick()}}>
                            <h3>{"#"+pokemon.numero}</h3>
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