import React from 'react';
import MYprofile from '../FaceDetect/MYprofile.jpg';
// import Validations from '../Validations/Validations';

const Profile = ({userInfo}) => {
    return (
        <div className="flex mv5 pa3 justify-between">
            <div className="ma2 bg-transparent w-50 ba br2 b--black-10 shadow-5 black-80">
                <div className="flex-grow flex items-center justify-between ph3">
                    <p className="f4 fw6">General Information</p>
                    <p className="f6 dib black-80 bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20 pointer">Edit</p>
                </div>
                <div className="bb b--black-10"></div>
                <div className="flex justify-between pa3">
                    <div>
                        <p className="f6">{userInfo.name}</p>
                        <p className='f6'>{userInfo.email}</p>
                    </div>
                    <div>
                        <img src={MYprofile} alt="" width="120px" height="120px"/>
                    </div>
                </div>
                <p className="f7 link dim pointer ph3 dark-blue underline">Change Password</p>
            </div>
            <div className="ma2 bg-transparent w-50 ba br2 b--black-10 shadow-5 black-80">
                <div className="flex-grow flex items-center justify-between ph3">
                    <p className="f4 fw6">Personalization</p>
                    <p className="f6 dib black-80 bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20 pointer">Edit</p>
                </div>
                <div className="bb b--black-10"></div>
                <div className="flex justify-between pa3">
                    <div>
                        <p className="f6">Theme Name</p>
                        <p className='f6'>Start-Color</p>
                        <p className='f6'>End-Color</p>
                    </div>
                    <div>
                        <img src={MYprofile} alt="" width="120px" height="120px"/>
                    </div>
                </div>
                <p className="f7 link dim pointer ph3 dark-blue underline">Reset to Default</p>
            </div>
        </div>
    )
}
export default Profile;