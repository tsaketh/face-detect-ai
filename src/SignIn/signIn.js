import React, {Component} from  'react';
import Validations from '../Validations/Validations';

import { connect } from 'react-redux';
import { emailChange, passwordChange, signin } from '../Actions';


const mapStateToProps = (state) => {
    return {
      email: state.onEmailChange.email,
      password: state.onPasswordChange.password,
      errors: state.userSignIn.errors,
      user: state.userSignIn.user
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      onEmailChange: (event) => dispatch(emailChange(event.target.value)),
      onPasswordChange: (event) => dispatch(passwordChange(event.target.value)),
      authenticateUser: (email, password) => dispatch(signin(email, password))
    }
}

class SignIn extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         email: "",
    //         password: "",
    //         errors: ""
    //     }
    // }

    // onEmailChange = (event) => {
    //     this.setState({email: event.target.value})
    // }

    // onPasswordChange = (event) => {
    //     this.setState({password: event.target.value})
    // }

    // authenticateUser = () =>{
    //     this.setState({errors: ""});
    //     fetch("https://smart-brain-login-ts110798.herokuapp.com/signin", { //https://smart-brain-login-ts110798.herokuapp.com
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             email: this.state.email,
    //             password: this.state.password
    //         })
    //     }).then(Response => {
    //         if (Response.status === 200) {
    //             this.props.onRouteChange('home');
    //         }
    //         return Response.json();
    //     }).then(data => {
    //         if (data === "Invalid Email or Password" ||
    //             data === "Error Logging in. Please check your network and try again") {
    //             this.setState({errors: data});
    //         } else {
    //             this.props.getUser(data);
    //         }
    //     }).catch(alert);
    // }
    // const { onRouteChange } = this.props;
    render(){
        const {onRouteChange, onEmailChange, onPasswordChange, errors, authenticateUser} = this.props;
        return (
            <article className="br2 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0 center">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" name="email-address"  id="email-address" 
                                    onChange = {onEmailChange}/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" name="password"  id="password" 
                                    onChange = {onPasswordChange}/>
                            </div>
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <Validations errors = {errors}/>
                        <div className="my-center flex justify-between mt3">
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign in" 
                                onClick={authenticateUser}/>
                            <p 
                                className="f6 link dim black db pointer"
                                onClick={()=>{onRouteChange('signup')}}>Sign up</p>
                        </div>
                        {/* <div className="lh-copy mt3 my-center">
                            <p 
                                className="f6 link dim black db pointer"
                                onClick={()=>{onRouteChange('signup')}}>Sign up</p> */}
                            {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
                        {/* </div> */}
                    </div>
                </main>
            </article>
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);