import React, {ReactElement} from "react";
import "./Modal.css";

function Modal({titulo, body, closeModal}: {
    titulo: string
    body: ReactElement,
    closeModal: Function,
}){

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Continue?</h1>
                </div>
                <div className="body">
                    <p>The next page looks amazing. Hope you want to go there!</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            closeModal();
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Modal