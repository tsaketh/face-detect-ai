import React from 'react';
import Logoicon from './smartbrainlogo.png';

const Loader = ({isPending, message}) => {
    return (
        isPending?<div className="loader-modal">
            <div className="flex justify-center loader-vpull">
                <img 
                    className = "loader-spin"
                    src={Logoicon} 
                    alt=""/>
            </div>
            <div className="flex justify-center">
                <p className="text-center profile-item-header">{message}</p>
            </div>
        </div>:""
    )
}
export default Loader;