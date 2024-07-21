import React, {ReactElement} from "react";
import "./Modal.css";

function Modal({titulo, children, closeModal}: {
    titulo: string,
    children: ReactElement,
    closeModal: Function,
}){

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <div className="header">{titulo}</div>
                    <button
                        onClick={() => {
                            closeModal();
                        }}
                    >X</button>
                </div>
                <div className="body">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal