import React from 'react'
import './Modal.css'

const Modal = (props) => {
    return(
        (props.modalState)?
            (props.startColor && props.endColor && props.startColor!== "default" && props.endColor!=="default")?
                (<div className="modal">
                    <div className="modal-inner br2 ba dark-gray b--black-10 mv6 w-100 mw6 center shadow-5"
                        style={{backgroundImage: "linear-gradient(to right, "+props.startColor+", "+props.endColor+")"}}>
                        <button className="modal-close-btn bg-transparent pointer"
                            onClick={()=>{props.setModalState(); props.setStartColor(props.userPrefs.start_color); props.setEndColor(props.userPrefs.end_color)}}>X</button>
                        {props.children}
                    </div>
                </div>):
                (<div className="modal">
                    <div className="modal-inner br2 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-5"
                        style={{backgroundImage: "linear-gradient(to right, "+props.userPrefs.start_color+", "+props.userPrefs.end_color+")"}}>
                        <button className="modal-close-btn bg-transparent pointer"
                            onClick={()=>{props.setModalState(false)}}>X</button>
                        {props.children}
                    </div>
                </div>):""
    )
}

export default Modal;