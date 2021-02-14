import React from 'react';
import MYprofile from '../FaceDetect/MYprofile.jpg';

const Navigation = ({isSignedIn, route, onRouteChange}) => {
    if (isSignedIn) {
        if (route === 'home') {
            return (
                <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black my-top">
                    <div className="mh3 mt3 mb2">
                        <img className="my-profile pointer" src={MYprofile} alt="" width="30px" height="30px"
                            onClick = {()=>onRouteChange('profile')}/>
                    </div>
                </nav>
            ) 
        } else {
            return (
                <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black my-top">
                    <p 
                        onClick={()=>{onRouteChange('home')}}
                        className="f6 link dib white dim mr3 mr4-ns pointer" 
                        >Home</p>
                    <p 
                        onClick={()=>onRouteChange('signin')}
                        className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer" 
                        >Sign Out</p>
                </nav>
            ) 
        } 
    } else {
        return (
            <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black my-top">
                <p 
                    onClick={()=>{onRouteChange('signin')}}
                    className="f6 link dib white dim mr3 mr4-ns pointer" 
                    >Sign In</p>
                <p 
                    onClick={()=>{onRouteChange('signup')}}
                    className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer" 
                    >Sign Up</p>
            </nav>
        )
    }
}

export default Navigation;