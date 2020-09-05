import React from 'react';

const Navigation = () => {
    return (
        <nav className="flex-grow pa3 flex items-center justify-end bb b--white-10 bg-black">
            <a className="f6 link dib white dim mr3 mr4-ns" href="#0">Sign In</a>
            <a className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20" href="#0">Sign Up</a>
        </nav>
    )
}

export default Navigation;