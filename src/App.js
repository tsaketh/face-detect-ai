import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn/signIn';
import ImageSubmitForm from './ImageSubmitForm/ImageSubmitForm';
import Navigation from './Navigation/Navigation';
import Rank from './Rank/Rank';
import Logo from './Logo/Logo';
import FaceDetect from './FaceDetect/FaceDetect';
// import Validations from './Validations/Validations';
import Register from './Register/Register';
import Profile from './Profile/Profile';
import 'tachyons';
import Particles from 'react-particles-js';

import { connect } from 'react-redux';
import { image, inputChange, routeChange } from './Actions';

const particleParams = {
  number: {
    density: {
      enable: true,
      value_area: 800,
    },
    value: 80
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.onInputChange.input,
    route: state.onRouteChange.route,
    isSignedIn: state.onRouteChange.isSignedIn,
    user: (state.userSignIn.user.length>0)?state.userSignIn.user:state.userSignUp.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(inputChange(event.target.value)),
    onRouteChange: (route) => dispatch(routeChange(route)),
    onImageSubmit: (user) => dispatch(image(user))
  }
}

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     input:'',
  //     imageUrl:'',
  //     user: {},
  //     route:'signin',
  //     isSignedIn:false
  //   }
  // }
  // getUser = (user) => {
  //   this.setState({user: user});
  // }
  // onInputChange = (event) => {
  //   this.setState({input: event.target.value})
  // }
  // onImageSubmit = () =>{
  //   this.setState({imageUrl: this.state.input})
  //   fetch("https://smart-brain-login-ts110798.herokuapp.com/image", {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({"id": this.state.user.id})
  //   }).then(Response => {
  //     if (Response.status === 200) {
  //       return Response.json();
  //     } else {
  //       return -1;
  //     }
  //   }).then(user => {
  //     if (user === -1) {
  //       alert("Server unresponsive. Please check your internet connection as first troubleshooting measure. Try again after sometime")
  //     } else {
  //       this.setState({user: user});
  //     }
  //   }).catch(alert);
  //   this.onRouteChange('home');
  // }
  // // faceBox(){

  // // }
  // onRouteChange=(route)=>{
  //   if (route === 'home' || route === 'profile') {
  //     this.setState({isSignedIn: true});
  //   } else{
  //     this.setState({isSignedIn: false})
  //   }
  //   this.setState({route: route})
  // }
  
  render(){
    const {user, isSignedIn, route, onRouteChange, onInputChange, onImageSubmit, input} = this.props;
    const bodyElement = document.getElementsByTagName('body');
    bodyElement.item(0).style.backgroundImage = "linear-gradient(to right, "+user.start_color+", "+user.end_color+")";
    return(
      <div>
        <Particles className='my-particles' params = {particleParams}/>
        <Navigation isSignedIn = {isSignedIn} route = {route} onRouteChange = {onRouteChange} avatarId = {user.avatar_id}/>
        {(route === 'home')? (
          <div>
            <Logo />
            <Rank user = {user}/>
            <ImageSubmitForm onInputChange = {onInputChange} onImageSubmit = {onImageSubmit}/>
            {(input !== '')?(<FaceDetect imageUrl = {input}/>):(<div></div>)}
          </div>
        ): (route === 'profile')? (
          <Profile userInfo = {user}/>
        ): (route === 'signin')? (
          <SignIn onRouteChange = {onRouteChange}/>
        ): (<Register onRouteChange = {onRouteChange}/>)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
