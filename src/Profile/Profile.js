import React from 'react';
import { Component } from 'react';
import MYprofile from '../FaceDetect/MYprofile.png';
import Modal from './Modal';
import Validations from '../Validations/Validations';
import CardArray from './CardArray';
import AvatarArray from './AvatarArray';

import { connect } from 'react-redux';
import { changeAvatar, changeConfirmPassword, changeEndColor, changeNewPassword, changeOldPassword, changeStartColor, resetBGTheme, setBGTheme, setProfileAvatar, toggleGIModal, togglePerModal, togglePicModal, toggleRDModal, toggleRPModal, updatePassword, updateUser } from '../Actions';

const mapStateToProps = (state) => {
    return {
        modalStateGI: state.triggermodal.modalStateGI,
        modalStatePer: state.triggermodal.modalStatePer,
        modalStateRD: state.triggermodal.modalStateRD,
        modalStateRP: state.triggermodal.modalStateRP,
        modalStatePic: state.triggermodal.modalStatePic,
        startColor: state.onStartColorChange.startColor,
        endColor: state.onEndColorChange.endColor,
        name: state.onNameChange.name,
        email: state.onEmailChange.email,
        oldPassword: state.onOldPasswordChange.oldPassword,
        newPassword: state.onNewPasswordChange.newPassword,
        confirmPassword: state.onConfirmPasswordChange.confirmPassword,
        avatar: state.setAvatar.avatar,
        nameError: state.onNameChange.nameError,
        emailError: state.onEmailChange.emailError,
        passwordError: state.onPasswordChange.passwordError,
        errors: state.updateUserData.errors
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        triggerModalGI: () => dispatch(toggleGIModal()),
        triggerModalPer: () => dispatch(togglePerModal()),
        triggerModalRD: () => dispatch(toggleRDModal()),
        triggerModalRP: () => dispatch(toggleRPModal()),
        triggerModalPic: () => dispatch(togglePicModal()),
        onNameChange: (event) => dispatch(nameChangeSignup(event.target.value)),
        onEmailChange: (event) => dispatch(emailChangeSignup(event.target.value)),
        onOldPasswordChange: (event) => dispatch(changeOldPassword(event.target.value)),
        onNewPasswordChange: (event) => dispatch(changeNewPassword(event.target.value)),
        onConfirmPasswordChange: (event) => dispatch(changeConfirmPassword(event.target.value)),
        onStartColorChange: (event) => dispatch(changeStartColor(event.target.value)),
        onEndColorChange: (event) => dispatch(changeEndColor(event.target.value)),
        setAvatar: (avatarId) => dispatch(changeAvatar(avatarId)),
        onGISave: (userInfo, name, email) => dispatch(updateUser(userInfo, name, email)),
        onPasswordReset: (userInfo, oldPassword, newPassword) => dispatch(updatePassword(userInfo, oldPassword, newPassword)),
        onThemeSave: (userInfo, startColor, endColor) => dispatch(setBGTheme(userInfo, startColor, endColor)),
        onThemeReset: (userInfo) => dispatch(resetBGTheme(userInfo)),
        onPictureSave: (userInfo, avatar) => dispatch(setProfileAvatar(userInfo, avatar))
    }
}

class Profile extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         modalStateGI: false,
    //         modalStatePer: false,
    //         modalStateRD: false,
    //         modalStateRP: false,
    //         modalStatePic: false,
    //         startColor: "",
    //         endColor: "",
    //         name: "",
    //         email: "",
    //         oldPassword: "",
    //         newPassword: "",
    //         confirmPassword: "",
    //         avatar:"",
    //         nameError: "",
    //         emailError: "",
    //         passwordError: "",
    //         errors: ""
    //     }
    // }
    // triggerModalGI = () => {
    //     this.setState({modalStateGI: !(this.state.modalStateGI), nameError:"", emailError:"", errors:""});
    // }
    // triggerModalPer = () => {
    //     this.setState({modalStatePer: !(this.state.modalStatePer), errors:""});
    // }
    // triggerModalRD = () => {
    //     this.setState({modalStateRD: !(this.state.modalStateRD), errors:""});
    // }
    // triggerModalRP = () => {
    //     this.setState({modalStateRP: !(this.state.modalStateRP), passwordError:"", errors:""});
    // }
    // triggerModalPic = () => {
    //     this.setState({modalStatePic: !(this.state.modalStatePic), errors:""});
    // }
    // onNameChange = (event) => {
    //     if (event.target.value.trim().length<=0) {
    //         this.setState({nameError: "Name cannot be empty\r\nAll spaces are not allowed"});
    //     } else {
    //         this.setState({name: event.target.value, nameError: ""});
    //     }
    // }
    // onEmailChange = (event) => {
    //     if (event.target.value.trim().length<=0) {
    //         this.setState({emailError: "Email cannot be empty\r\nAll spaces are not allowed"});
    //     } else if (event.target.value.match(/^[a-zA-Z0-9.]+@([a-zA-Z]+\.[a-zA-Z]{2,})$/) === null) {
    //         this.setState({emailError: "Invalid email format"});
    //     } else {
    //         this.setState({email: event.target.value, emailError: ""});
    //     }
    // }
    // onOldPasswordChange= (event) => {
    //     this.setState({oldPassword: event.target.value});
    // }
    // onNewPasswordChange = (event) => {
    //     if(event.target.value.trim().length<=8 &&
    //         (event.target.value.match(/[^a-zA-Z0-9]+/) === null || 
    //         event.target.value.match(/[0-9]+/) === null || 
    //         event.target.value.match(/[A-Z]+/) === null || 
    //         event.target.value.match(/[a-z]+/) === null
    //         )) {
    //         this.setState({passwordError: "Please enter a secure password with more than 8 characters having atleast one special character, one Upper case, one Lower case letter and a digit"});
    //     } else if (event.target.value.trim().length<=8) {
    //         this.setState({passwordError: "Password should contain more than 8 characters"});
    //     } else if (event.target.value.match(/[^a-zA-Z0-9]+/) === null || 
    //                 event.target.value.match(/[0-9]+/) === null || 
    //                 event.target.value.match(/[A-Z]+/) === null || 
    //                 event.target.value.match(/[a-z]+/) === null
    //                 ) {
    //                     this.setState({passwordError: "Password should contain atleast one special character, one Upper case, one Lower case letter and a digit"});
    //     } else {        
    //         this.setState({newPassword: event.target.value, passwordError: ""});
    //     }
    // }
    // onConfirmPasswordChange = (event) => {
    //     if (event.target.value.trim().length>0 && event.target.value !== this.state.newPassword) {
    //         this.setState({passwordError: "Password does not match with new password!"});
    //     } else {
    //         this.setState({confirmPassword: event.target.value, passwordError: ""});
    //     }
    // }
    // onStartColorChange = (event) => {
    //     this.setState({startColor: event.target.value});
    // }
    // onEndColorChange = (event) => {
    //     this.setState({endColor: event.target.value});
    // }
    // setStartColor = (color) => {
    //     this.setState({startColor: color});
    // }
    // setEndColor = (color) => {
    //     this.setState({endColor: color});
    // }
    // setAvatar = (avatarId) => {
    //     this.setState({avatar: avatarId});
    // }
    // onGISave = () => {
    //     this.setState({errors: ""});
    //     if (this.state.nameError === "" && this.state.emailError === "") {
    //         fetch("https://smart-brain-login-ts110798.herokuapp.com/update-user", { //http://127.0.0.1:3001
    //             method: 'PUT',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 id: this.props.userInfo.id,
    //                 name: this.state.name,
    //                 email: this.state.email
    //             })
    //         }).then(res => {
    //             if (res.status === 200) {
    //                 this.triggerModalGI();
    //             }
    //             return res.json();
    //         }).then(data => {
    //             if (data === "The email already exists." || data === "All fields are Mandatory. Please fill!" || data === "Invalid request. Please contact support") {
    //                 this.setState({errors: data});
    //             } else {
    //                 this.props.getUser(data);
    //             }
    //         }).catch(e => {
    //             alert(e+"\r\nServer could be down due to maintanance.\r\nTry again after sometime.\r\nElse try after troubleshooting your network connection")
    //         });    
    //     }
    //     else {
    //         alert("All fields are mandatory. Please fill!");
    //     }
    // }
    // onPasswordReset = () => {
    //     if (this.state.confirmPassword === this.state.newPassword) {
    //         this.setState({errors: ""});
    //         fetch("https://smart-brain-login-ts110798.herokuapp.com/update-password", {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 id: this.props.userInfo.id,
    //                 oldPassword: this.state.oldPassword,
    //                 newPassword: this.state.newPassword
    //             })
    //         }).then(Response => {
    //             return Response.json();
    //         }).then(data => {
    //             if (data === "Success") {
    //                 this.triggerModalRP();
    //             } else {
    //                 this.setState({errors: data});
    //             }
    //         }).catch(alert);
    //     }
    // }
    // onThemeSave = () => {
    //     this.setState({errors: ""});
    //     fetch("https://smart-brain-login-ts110798.herokuapp.com/bg-theme", {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: this.props.userInfo.id,
    //             startColor: this.state.startColor,
    //             endColor: this.state.endColor
    //         })
    //     }).then(Response => {
    //         if (Response.status === 200) {
    //             this.triggerModalPer();
    //         }
    //         return Response.json();
    //     }).then(data => {
    //         if (data === "Internal Server Error. Please contact support!") {
    //             this.setState({errors: data});
    //         } else if (data === "Operation failed. Please check your internet connection"){
    //             alert(data);
    //         } else {
    //             this.props.getUser(data);
    //         }
    //     }).catch(alert);
    // }
    // onThemeReset = () => {
    //     this.setState({errors: ""});
    //     fetch("https://smart-brain-login-ts110798.herokuapp.com/bg-theme", {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: this.props.userInfo.id,
    //             startColor: "#859398",
    //             endColor: "#283048"
    //         })
    //     }).then(Response => {
    //         if (Response.status === 200) {
    //             this.triggerModalRD();
    //         }
    //         return Response.json();
    //     }).then(data => {
    //         if (data === "Internal Server Error. Please contact support!") {
    //             this.setState({errors: data});
    //         } else if (data === "Operation failed. Please check your internet connection"){
    //             alert(data);
    //         } else {
    //             this.props.getUser(data);
    //         }
    //     }).catch(alert);
    // }
    // onPictureSave = () => {
    //     this.setState({errors:""});
    //     fetch("https://smart-brain-login-ts110798.herokuapp.com/profile-avatar", {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: this.props.userInfo.id,
    //             avatarId: this.state.avatar
    //         })
    //     }).then(Response => {
    //         if (Response.status === 200) {
    //             this.triggerModalPic();
    //         }
    //         return Response.json();
    //     }).then(data => {
    //         if (data === "Internal Server Error. Please contact support!") {
    //             this.setState({errors: data});
    //         } else if (data === "Operation failed. Please check your internet connection"){
    //             alert(data);
    //         } else {
    //             this.props.getUser(data);
    //         }
    //     }).catch(alert);
    // }
    render(){
        const {triggerModalGI, triggerModalPic, userInfo, triggerModalRP, 
            modalStateGI, onNameChange, nameError, onEmailChange, 
            emailError, errors, onGISave, modalStateRP, triggerModalRP, 
            onOldPasswordChange, onNewPasswordChange, onConfirmPasswordChange, passwordError, 
            onPasswordReset, modalStatePic, triggerModalPic, setAvatar, onPictureSave, 
            triggerModalPer, triggerModalRD, modalStatePer, triggerModalPer, startColor, endColor, 
            onStartColorChange, onEndColorChange, onThemeSave, modalStateRD, triggerModalRD, onThemeReset} = this.props;
        return (
            <div className="flex mv5 pa3 justify-between">
                <div className="ma2 bg-transparent w-50 ba br2 b--black-10 shadow-5 black-80">
                    <div className="flex-grow flex items-center justify-between ph3">
                        <p className="f4 fw6">General Information</p>
                        <p className="f6 dib black-80 bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20 pointer"
                            onClick={triggerModalGI}>Edit</p>
                    </div>
                    <div className="bb b--black-10"></div>
                    <div className="flex justify-between pa3">
                        <div>
                            <p className="f6">{userInfo.name}</p>
                            <p className='f6'>{userInfo.email}</p>
                        </div>
                        <div>
                            <img src={(userInfo.avatar_id)?`https://robohash.org/${userInfo.avatar_id}?set=set2&size=120x120`:MYprofile} alt="" width="120px" height="120px"/>
                            <p className="f7 link dim pointer ph3 dark-blue underline" onClick={triggerModalPic}>Change Picture</p>
                        </div>
                    </div>
                    <p className="f7 link dim pointer ph3 dark-blue underline" onClick={triggerModalRP}>Change Password</p>
                    <Modal modalState={modalStateGI} setModalState={triggerModalGI} userPrefs={userInfo}>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Edit Your Details</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="user-name">Name</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" name="user-name"  id="user-name" defaultValue={userInfo.name} 
                                onChange = {onNameChange}
                                />
                            <Validations errors = {nameError}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="register-email-address" defaultValue={userInfo.email}
                                onChange = {onEmailChange}
                                />
                            <Validations errors = {emailError}/>
                        </div>
                        <Validations errors = {errors}/>
                        <div className="flex justify-center mt3">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib" 
                                    type="submit" 
                                    value="Save" 
                                    onClick={onGISave}
                                    />
                        </div>
                    </Modal>
                    <Modal modalState={modalStateRP} setModalState={triggerModalRP} userPrefs={userInfo}>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Change Password</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="old-password">Old Password*</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="old-password"  id="old-password" 
                                onChange = {onOldPasswordChange}/>
                            {/* <Validations errors = {this.state.nameError}/> */}
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="new-password">New Password*</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="new-password"  id="new-password" 
                                onChange = {onNewPasswordChange}
                                />
                            {/* <Validations errors = {this.state.emailError}/> */}
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="confirm-password">Confirm Password*</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="confirm-password"  id="confirm-password" 
                                onChange = {onConfirmPasswordChange}
                                />
                            <Validations errors = {passwordError}/>
                        </div>
                        <Validations errors = {errors}/>
                        <div className="flex justify-center mt3">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib" 
                                    type="submit" 
                                    value="Save" 
                                    onClick={onPasswordReset}
                                    />
                        </div>
                    </Modal>
                    <CardArray avatars={AvatarArray} modalState={modalStatePic} setModalState={triggerModalPic} userPrefs={userInfo} setAvatar={setAvatar}>
                        <div className="flex justify-center mt3">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib" 
                                    type="submit" 
                                    value="Save" 
                                    onClick={onPictureSave}
                                    />
                        </div>
                    </CardArray>
                </div>
                <div className="ma2 bg-transparent w-50 ba br2 b--black-10 shadow-5 black-80">
                    <div className="flex-grow flex items-center justify-between ph3">
                        <p className="f4 fw6">Personalization</p>
                        <p className="f6 dib black-80 bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20 pointer"
                            onClick={triggerModalPer}>Edit</p>
                    </div>
                    <div className="bb b--black-10"></div>
                    <div className="flex justify-between pa3">
                        <div>
                            <p className="f6">Current background</p>
                            <div className="flex">
                                <input className="ph3 pv2 ba b--black f6 dib" id="current-start-color" type="submit" value="on left" style={{backgroundColor: userInfo.start_color, color: userInfo.end_color}}/>
                                <input className="ph3 pv2 ba b--black f6 dib" id="current-end-color" type="submit" value="to right" style={{backgroundColor: userInfo.end_color, color: userInfo.start_color}}/>
                            </div>
                        </div>
                        {/* <div>
                            <img src={MYprofile} alt="" width="120px" height="120px"/>
                        </div> */}
                    </div>
                    <p className="f7 link dim pointer ph3 dark-blue underline" onClick={triggerModalRD}>Reset to Default</p>
                    <Modal modalState={modalStatePer} setModalState={triggerModalPer} userPrefs={userInfo} startColor = {startColor} endColor={endColor} setStartColor={onStartColorChange} setEndColor={onEndColorChange}>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Edit Background theme</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="user-name">Start Color</label>
                            <input 
                                className="pa2" 
                                type="color" name="start-color"  id="start-color" defaultValue={userInfo.start_color}
                                /*onChange = {this.onNameChange}*/
                                onChange={onStartColorChange}
                                />
                            {/* <Validations errors = {this.state.nameError}/> */}
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="email-address">End Color</label>
                            <input 
                                className="pa2" 
                                type="color" name="end-color"  id="end-color" defaultValue={userInfo.end_color}
                                // onChange = {this.onEmailChange}
                                onChange={onEndColorChange}
                                />
                            {/* <Validations errors = {this.state.emailError}/> */}
                        </div>
                        <Validations errors = {errors}/>
                        <div className="flex justify-center mt3">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib" 
                                    type="submit" 
                                    value="Save" 
                                    onClick={onThemeSave}
                                    />
                        </div>
                    </Modal>
                    <Modal modalState={modalStateRD} setModalState={triggerModalRD} userPrefs={userInfo}>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Reset background</legend>
                        <br></br>
                        <label className="db fw6 lh-copy f6 black-80" htmlFor="user-name">Are you sure you want to reset the background to default?</label>
                        <Validations errors = {errors}/>
                        <div className="flex justify-end mt3">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib" 
                                    type="submit" 
                                    value="Yes" 
                                    onClick={onThemeReset}
                                    />
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);