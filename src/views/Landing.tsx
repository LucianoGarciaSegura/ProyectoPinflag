import {useState} from "react";
import PokeGrid from "../views/PokeGrid"

function Landing() {

    const [pokeGridView, setPokeGridView] = useState(false)

    return (
        <>
            <div>
                <button
                    onClick={()=> {
                        setPokeGridView(true)
                    }}
                >
                    START
                </button>
                {pokeGridView && (<PokeGrid/>)}
            </div>

        </>
    )
}

export default Landing