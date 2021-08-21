import React from 'react';
import { Link } from 'react-router-dom';
import MYprofile from '../FaceDetect/MYprofile.png';

const Navigation = ({isSignedIn, route, onRouteChange, onUserSignOut, avatarId}) => {
    if (isSignedIn) {
        if (route === 'home') {
            return (
                <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black my-top">
                    <Link to="/profile">
                        <div className="mh3 mt3 mb2">
                            <img className="my-profile pointer" src={(avatarId)?`https://robohash.org/${avatarId}?set=set2&size=30x30`:MYprofile} alt="" width="30px" height="30px"
                                onClick = {()=>onRouteChange('profile')}/>
                        </div>
                    </Link>
                    <Link to="/signin">
                        <p 
                            onClick={()=>{onUserSignOut();onRouteChange('signin')}}
                            className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer" 
                            >Sign Out</p>
                    </Link>
                </nav>
            ) 
        } else {
            return (
                <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black my-top">
                    <Link to="/home">
                    <p 
                        onClick={()=>{onRouteChange('home')}}
                        className="f6 link dib white dim mr3 mr4-ns pointer" 
                        >Home</p>
                    </Link>
                    <Link to="/signin">
                        <p 
                            onClick={()=>{onUserSignOut();onRouteChange('signin')}}
                            className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer" 
                            >Sign Out</p>
                    </Link>
                </nav>
            ) 
        } 
    } else {
        return (
            <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black my-top">
                <Link to="/signin">
                    <p 
                        onClick={()=>{onRouteChange('signin')}}
                        className="f6 link dib white dim mr3 mr4-ns pointer" 
                        >Sign In</p>
                </Link>
                <Link to="/signup">
                    <p 
                        onClick={()=>{onRouteChange('signup')}}
                        className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer" 
                        >Sign Up</p>
                </Link>
            </nav>
        )
    }
}

export default Navigation;