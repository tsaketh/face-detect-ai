import React from 'react';

const Navigation = ({isSignedIn, onRouteChange}) => {
    if (isSignedIn) {
        return (
            <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black">
                <p 
                    onClick={()=>onRouteChange('signin')}
                    className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20 pointer" 
                    >Sign Out</p>
            </nav>
        )  
    } else {
        return (
            <nav className="flex-grow pa flex items-center justify-end bb b--white-10 bg-black">
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