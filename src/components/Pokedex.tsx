import React, {ReactElement} from "react";

function Modal({datos}: {
    datos: any
}){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <button> X </button>
                <div className="title">
                    <h1>asdasddsa</h1>
                </div>
                <div className="body"></div>
                <div className="footer"></div>
            </div>
        </div>
    )
}

export default Modal