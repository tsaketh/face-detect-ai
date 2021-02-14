import React from 'react';
import './ImageSubmitForm.css';

const ImageSubmitForm = ({onInputChange, onImageSubmit}) => {
    return (
        <article className="flex justify-center pa3 br2 ba dark-gray b--black-10 mw6 center shadow-5 my-pattern">
            <input 
                // style={{width: "50rem"}}
                className="pa2 input-reset ba b--black hover-bg-black hover-white "
                type="text"
                onChange={onInputChange}/>
            <input 
                className="b white ph3 pv2 input-reset ba b--black bg-black grow pointer f6 dib"
                type="submit" value="Detect Face"
                onClick={onImageSubmit}/>
        </article>
    )
}
export default ImageSubmitForm;