import React, { useState } from 'react';
import AvatarCard from './AvatarCard';

const CardArray = (props) => {
    const [selectedId, setSelectedId] = useState(props.userPrefs.avatar_id);
    const avatarList = props.avatars.map(({id})=>{
        return <AvatarCard id={id} key={id} selectedId={selectedId} setSelectedId={setSelectedId} setAvatar={props.setAvatar}/>
    });
    return (
        (props.modalState)?
            (<div className="modal">
                <div className="modal-inner br2 ba dark-gray b--black-10 mv6 w-100 mw6 center shadow-5"
                    style={{backgroundImage: "linear-gradient(to right, "+props.userPrefs.start_color+", "+props.userPrefs.end_color+")"}}>
                    <button className="modal-close-btn bg-transparent pointer"
                        onClick={()=>{props.setModalState()}}>X</button>
                    <div>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Choose Your Avatar</legend>
                        <div className="scroll">
                            {avatarList}
                        </div>
                    </div>
                    {props.children}
                </div>
            </div>):""
    )
}

export default CardArray;