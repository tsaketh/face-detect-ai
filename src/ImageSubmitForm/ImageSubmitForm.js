import React from 'react';

const ImageSubmitForm = ({onInputChange, onImageSubmit}) => {
    return (
        <div 
            className="flex flex-grow pa3 justify-center"
            style={{
                marginLeft: "33.33%", 
                marginRight: "33.33%"
            }}>
            <input 
                style={{width: "50rem"}}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white "
                type="text"
                onChange={onInputChange}/>
            <input 
                className="b white ph3 pv2 input-reset ba b--black bg-black grow pointer f6 dib"
                type="submit" value="Detect Face"
                onClick={onImageSubmit}/>
        </div>
    )
}
export default ImageSubmitForm;