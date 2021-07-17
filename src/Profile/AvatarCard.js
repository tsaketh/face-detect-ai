import React from 'react';
import './Modal.css';

const AvatarCard = ({id, selectedId, setSelectedId, setAvatar}) => {
    console.log('selected ID: ', selectedId);
    return (
        <div className= {`tc dib br3 pa3 ma2 grow bw2 shadow-5 ${(selectedId==id)?'avatar-selected':''}`} id={id}
            onClick={()=>{
                setSelectedId(id);
                setAvatar(id)}}>
            <img src={`https://robohash.org/${id}?set=set2&size=60x60`} alt='' height='60px' width='auto'
                />
        </div>
    );
}

export default AvatarCard;