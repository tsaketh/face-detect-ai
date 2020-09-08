import React from 'react';
// import FaceImg from './MYprofile.jpg'
import './FaceDetect.css';

const FaceDetect =({ imageUrl }) => {
    return (
        <div className="my-center ma">
            <div className="absolute mt2">
                <img 
                    width="500px"
                    src={imageUrl} 
                    alt="" 
                    height="auto"
                />
                <div 
                    style = {{
                        top: "35%",
                        right: "38%",
                        bottom: "44%",
                        left: "40%"
                    }}
                    className="bounding-box">
                </div>
            </div>
        </div>
    )
}
export default FaceDetect;