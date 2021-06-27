import React from 'react';
import './Modal.css';
// import MYprofile from '../FaceDetect/MYprofile.jpg';

const AvatarCard = ({id, key, selectedId, setSelectedId, setAvatar}) => {
    // const [avatar, setAvatarCSS] = useState("avatar-selected");
    return (
        <div className= {`tc dib br3 pa3 ma2 grow bw2 shadow-5 ${(selectedId===id)?'avatar-selected':''}`} id={key}
            onClick={()=>{
                setSelectedId(id);
                // setAvatarCSS("avatar-selected");
                setAvatar(id)}}>
            <img src={`https://robohash.org/${id}?set=set2&size=60x60`} alt='' height='60px' width='auto' //`https://robohash.org/${id}?set=set2&size=60x60`
                />
        </div>
    );
}

export default AvatarCard;