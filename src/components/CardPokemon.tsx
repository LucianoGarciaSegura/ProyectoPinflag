import React, {ReactElement} from "react";
import typePokemon from "../components/types"
import "./CardPokemon.css";


function CardPokemon({pokemon}: {
    pokemon: typePokemon
}) {

    const typeColors = {
        fuego: 'red',
        tierra: 'green',
        agua: 'blue',
        electrico: 'grey',
    };

    return (

        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <div className="circle-container">
                        {pokemon.tipo.map((tipo) => {
                            return (
                                <div key={tipo} className="circle" style={{"backgroundColor": typeColors[tipo]}}/>
                            )
                        })}
                    </div>
                    <img src={pokemon.imagen}/>
                    <div className="card-content">
                        <h3>{pokemon.nombre}</h3>
                        <p>{pokemon.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>


        /*<div className="card mb-3" style={{ maxWidth: '340px', minWidth: '340px' }}>
            <div className="row g-0" >
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">#{pokemon.numero} - {pokemon.nombre}</h5>
                        <div className="container" >
                            <div className="col-md-4">
                                <img src={pokemon.imagen} className="img-fluid rounded-start" alt={pokemon.nombre} />
                            </div>
                        </div>
                        <p className="card-text"><strong>Tipo:</strong> {pokemon.tipo.join(', ')}</p>
                        <p className="card-text"><strong>Descripción:</strong> {pokemon.descripcion}</p>
                        <p className="card-text"><strong>Peso:</strong> {pokemon.peso} kg</p>
                        <p className="card-text"><strong>Altura:</strong> {pokemon.altura} m</p>
                    </div>
                </div>
            </div>
        </div>*/
    )
}

export default CardPokemon