import React, { Component } from 'react';
import Validations from '../Validations/Validations';

import { connect } from 'react-redux';
import { emailChangeSignup, nameChangeSignup, passwordChangeSignup, signup } from '../Actions';

const mapStateToProps = (state) => {
    return {
        name: state.onNameChange.name,
        email: state.onEmailChange.email,
        password: state.onPasswordChange.password,
        nameError: state.onNameChange.nameError,
        emailError: state.onEmailChange.emailError,
        passwordError: state.onPasswordChange.passwordError,
        errors: state.updateUserData.errors,
        user: state.updateUserData.user
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        onNameChange: (event) => dispatch(nameChangeSignup(event.target.value)),
        onEmailChange: (event) => dispatch(emailChangeSignup(event.target.value)),
        onPasswordChange: (event) => dispatch(passwordChangeSignup(event.target.value)),
        onUserSignUp: (name, email, password) => dispatch(signup(name, email, password))
    }
}

class Register extends Component{
    onSignUp = () => {
        this.props.onUserSignUp(this.props.name, this.props.email, this.props.password);
    }
    render(){
        const {onNameChange, nameError, onEmailChange, emailError, onPasswordChange, passwordError, errors} = this.props;
        return(
            <article className="br2 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0 center">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="user-name">Name*</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="text" name="user-name"  id="user-name" 
                                    onChange = {onNameChange}/>
                                <Validations errors = {nameError}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email*</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" name="email-address"  id="register-email-address" 
                                    onChange = {onEmailChange}/>
                                <Validations errors = {emailError}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password*</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" name="password"  id="register-password" 
                                    onChange = {onPasswordChange}
                                    />
                                <Validations errors = {passwordError}/>
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <Validations errors = {errors}/>
                        <div className="flex justify-center mt3">
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign Up" 
                                onClick={this.onSignUp}/>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);