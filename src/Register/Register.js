import React, { Component } from 'react';
import Validations from '../Validations/Validations';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            nameError: "",
            emailError: "",
            passwordError: "",
            errors: ""
        }
    }
    onNameChange = (event) => {
        if (event.target.value.trim().length<=0) {
            this.setState({nameError: "Name cannot be empty\r\nAll spaces are not allowed"});
        } else {
            this.setState({name: event.target.value, nameError: ""});
        }
    }
    onEmailChange = (event) => {
        if (event.target.value.trim().length<=0) {
            this.setState({emailError: "Email cannot be empty\r\nAll spaces are not allowed"});
        } else if (event.target.value.match(/^[a-zA-Z0-9.]+@([a-zA-Z]+\.[a-zA-Z]{2,})$/) === null) {
            this.setState({emailError: "Invalid email format"});
        } else {
            this.setState({email: event.target.value, emailError: ""});
        }
    }
    onPasswordChange = (event) => {
        if(event.target.value.trim().length<=8 &&
            (event.target.value.match(/[^a-zA-Z0-9]+/) === null || 
            event.target.value.match(/[0-9]+/) === null || 
            event.target.value.match(/[A-Z]+/) === null || 
            event.target.value.match(/[a-z]+/) === null
            )) {
            this.setState({passwordError: "Please enter a secure password with more than 8 characters having atleast one special character, one Upper case, one Lower case letter and a digit"});
        } else if (event.target.value.trim().length<=8) {
            this.setState({passwordError: "Password should contain more than 8 characters"});
        } else if (event.target.value.match(/[^a-zA-Z0-9]+/) === null || 
                    event.target.value.match(/[0-9]+/) === null || 
                    event.target.value.match(/[A-Z]+/) === null || 
                    event.target.value.match(/[a-z]+/) === null
                    ) {
                        this.setState({passwordError: "Password should contain atleast one special character, one Upper case, one Lower case letter and a digit"});
        } else {        
            this.setState({password: event.target.value, passwordError: ""});
        }
    }
    onSignUp = () => {
        this.setState({errors: ""});
        if (this.state.nameError === "" && this.state.emailError === "" && this.state.passwordError === "") {
            fetch("https://smart-brain-login-ts110798.herokuapp.com/signup", { //https://smart-brain-login-ts110798.herokuapp.com
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
                })
            }).then(res => {
                if (res.status === 200) {
                    this.props.onRouteChange('home');
                }
                return res.json();
            }).then(data => {
                if (data === "The email already exists." || data === "All fields are Mandatory. Please fill!") {
                    this.setState({errors: data});
                } else {
                    this.props.getUser(data);
                }
            }).catch(e => {
                alert(e+"\r\nServer could be down due to maintanance.\r\nTry again after sometime.\r\nElse try after troubleshooting your network connection")
            });    
        }
        else {
            alert("All fields are mandatory. Please fill!");
        }
    }
    render(){
        // const {onRouteChange} = this.props;
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
                                    onChange = {this.onNameChange}/>
                                <Validations errors = {this.state.nameError}/>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email*</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" name="email-address"  id="register-email-address" 
                                    onChange = {this.onEmailChange}/>
                                <Validations errors = {this.state.emailError}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password*</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" name="password"  id="register-password" 
                                    onChange = {this.onPasswordChange}
                                    />
                                <Validations errors = {this.state.passwordError}/>
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <Validations errors = {this.state.errors}/>
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
export default Register;