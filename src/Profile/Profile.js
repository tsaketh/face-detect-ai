import React from 'react';
import { Component } from 'react';
import MYprofile from '../FaceDetect/MYprofile.png';
import Modal from './Modal';
import Validations from '../Validations/Validations';
import CardArray from './CardArray';
import AvatarArray from './AvatarArray';

import { connect } from 'react-redux';
import { changeAvatar, changeConfirmPassword, changeEndColor, changeNewPassword, changeOldPassword, changeStartColor, emailChangeSignup, nameChangeSignup, resetBGTheme, setBGTheme, setProfileAvatar, toggleGIModal, togglePerModal, togglePicModal, toggleRDModal, toggleRPModal, updatePassword, updateUser } from '../Actions';
import Loader from '../Loader/Loader';

const mapStateToProps = (state) => {
    return {
        modalStateGI: state.triggerModal.modalStateGI,
        modalStatePer: state.triggerModal.modalStatePer,
        modalStateRD: state.triggerModal.modalStateRD,
        modalStateRP: state.triggerModal.modalStateRP,
        modalStatePic: state.triggerModal.modalStatePic,
        startColor: state.onStartColorChange.startColor,
        endColor: state.onEndColorChange.endColor,
        name: state.onNameChange.name,
        email: state.onEmailChange.email,
        oldPassword: state.onOldPasswordChange.oldPassword,
        newPassword: state.onNewPasswordChange.newPassword,
        confirmPassword: state.onNewPasswordChange.confirmPassword,
        avatar: state.setAvatar.avatar,
        nameError: state.onNameChange.nameError,
        emailError: state.onEmailChange.emailError,
        passwordError: state.onNewPasswordChange.passwordUpdateErrors,
        errors: state.updateUserData.errors,
        user: state.updateUserData.user,
        isPending: state.updateUserData.isPending
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
        setStartColor: (color) => dispatch(changeStartColor(color)),
        setEndColor: (color) => dispatch(changeEndColor(color)),
        setAvatar: (avatarId) => dispatch(changeAvatar(avatarId)),
        onGISaveAction: (user, name, email) => dispatch(updateUser(user, name, email)),
        onPasswordResetAction: (user, oldPassword, newPassword) => dispatch(updatePassword(user, oldPassword, newPassword)),
        onThemeSaveAction: (user, startColor, endColor) => dispatch(setBGTheme(user, startColor, endColor)),
        onThemeResetAction: (user) => dispatch(resetBGTheme(user)),
        onPictureSaveAction: (user, avatar) => dispatch(setProfileAvatar(user, avatar))
    }
}

class Profile extends Component {
    onGISave = () => {
        this.props.onGISaveAction(this.props.user, this.props.name, this.props.email);
    }
    onPasswordReset = () => {
        if (this.props.newPassword === this.props.confirmPassword) {
            this.props.onPasswordResetAction(this.props.user, this.props.oldPassword, this.props.newPassword);
        } else {
            alert("Please make sure that you enter same password in confirm password as entered in new password");
        }
    }
    onThemeSave = () => {
        this.props.onThemeSaveAction(this.props.user, this.props.startColor, this.props.endColor);
    }
    onThemeReset = () => {
        this.props.onThemeResetAction(this.props.user);
    }
    onPictureSave = () => {
        this.props.onPictureSaveAction(this.props.user, this.props.avatar);
    }
    render(){
        const {triggerModalGI, triggerModalPic, user, triggerModalRP, 
            modalStateGI, onNameChange, nameError, onEmailChange, 
            emailError, errors, modalStateRP, 
            onOldPasswordChange, onNewPasswordChange, onConfirmPasswordChange, passwordError, 
            modalStatePic, setAvatar, 
            triggerModalPer, triggerModalRD, modalStatePer, startColor, endColor, setStartColor, setEndColor, 
            onStartColorChange, onEndColorChange, modalStateRD, isPending} = this.props;
        return (
            <div className="potrait-block mv5 pa3 justify-between">
                <div className="profile-block-left bg-transparent ba br2 b--black-10 shadow-5 black-80">
                    <div className="flex-grow flex items-center justify-between ph3">
                        <p className="profile-item-header">General Information</p>
                        <p className="profile-item-content dib black-80 bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20 pointer"
                            onClick={triggerModalGI}>Edit</p>
                    </div>
                    <div className="bb b--black-10"></div>
                    <div className="flex justify-between pa3">
                        <div>
                            <p className="profile-item-content">{user.name}</p>
                            <p className='profile-item-content'>{user.email}</p>
                        </div>
                        <div>
                            <img src={(user.avatar_id)?`https://robohash.org/${user.avatar_id}?set=set2&size=120x120`:MYprofile} alt="" width="120px" height="120px"/>
                            <p className="profile-item-links link dim pointer ph3 dark-blue underline" onClick={triggerModalPic}>Change Picture</p>
                        </div>
                    </div>
                    <p className="profile-item-links link dim pointer ph3 dark-blue underline" onClick={triggerModalRP}>Change Password</p>
                    <Modal modalState={modalStateGI} setModalState={triggerModalGI} userPrefs={user}>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Edit Your Details</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="user-name">Name</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" name="user-name"  id="user-name" defaultValue={user.name} 
                                onChange = {onNameChange}
                                />
                            <Validations errors = {nameError}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="email-address">Email</label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="register-email-address" defaultValue={user.email}
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
                                    onClick={this.onGISave}
                                    />
                        </div>
                    </Modal>
                    <Modal modalState={modalStateRP} setModalState={triggerModalRP} userPrefs={user}>
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
                                    onClick={this.onPasswordReset}
                                    />
                        </div>
                    </Modal>
                    <CardArray avatars={AvatarArray} modalState={modalStatePic} setModalState={triggerModalPic} userPrefs={user} setAvatar={setAvatar}>
                        <div className="flex justify-center mt3">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib" 
                                    type="submit" 
                                    value="Save" 
                                    onClick={this.onPictureSave}
                                    />
                        </div>
                    </CardArray>
                </div>
                <div className="profile-block-right bg-transparent ba br2 b--black-10 shadow-5 black-80">
                    <div className="flex-grow flex items-center justify-between ph3">
                        <p className="profile-item-header">Personalization</p>
                        <p className="profile-item-content dib black-80 bg-animate hover-bg-black hover-white no-underline pv2 ph4 br-pill ba b--black-20 pointer"
                            onClick={triggerModalPer}>Edit</p>
                    </div>
                    <div className="bb b--black-10"></div>
                    <div className="flex justify-between pa3">
                        <div>
                            <p className="profile-item-content">Current background</p>
                            <div className="flex">
                                <input className="ph3 pv2 ba b--black profile-item-content dib" id="current-start-color" type="submit" value="on left" style={{backgroundColor: user.start_color, color: user.end_color}}/>
                                <input className="ph3 pv2 ba b--black profile-item-content dib" id="current-end-color" type="submit" value="to right" style={{backgroundColor: user.end_color, color: user.start_color}}/>
                            </div>
                        </div>
                        {/* <div>
                            <img src={MYprofile} alt="" width="120px" height="120px"/>
                        </div> */}
                    </div>
                    <p className="profile-item-links link dim pointer ph3 dark-blue underline" onClick={triggerModalRD}>Reset to Default</p>
                    <Modal modalState={modalStatePer} setModalState={triggerModalPer} userPrefs={user} startColor = {startColor} endColor={endColor} setStartColor={setStartColor} setEndColor={setEndColor}>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Edit Background theme</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="user-name">Start Color</label>
                            <input 
                                className="pa2" 
                                type="color" name="start-color"  id="start-color" defaultValue={user.start_color}
                                /*onChange = {this.onNameChange}*/
                                onChange={onStartColorChange}
                                />
                            {/* <Validations errors = {this.state.nameError}/> */}
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black-80" htmlFor="email-address">End Color</label>
                            <input 
                                className="pa2" 
                                type="color" name="end-color"  id="end-color" defaultValue={user.end_color}
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
                                    onClick={this.onThemeSave}
                                    />
                        </div>
                    </Modal>
                    <Modal modalState={modalStateRD} setModalState={triggerModalRD} userPrefs={user}>
                        <legend className="f4 fw6 ph0 mh0 center black-80">Reset background</legend>
                        <br></br>
                        <label className="db fw6 lh-copy f6 black-80" htmlFor="user-name">Are you sure you want to reset the background to default?</label>
                        <Validations errors = {errors}/>
                        <div className="flex justify-end mt3">
                                <input 
                                    className="b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib" 
                                    type="submit" 
                                    value="Yes" 
                                    onClick={this.onThemeReset}
                                    />
                        </div>
                    </Modal>
                </div>
                <Loader isPending={isPending} message="Please wait while smart brain updates your data"/>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);