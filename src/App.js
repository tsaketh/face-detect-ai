import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn/signIn';
import ImageSubmitForm from './ImageSubmitForm/ImageSubmitForm';
import Navigation from './Navigation/Navigation';
import Rank from './Rank/Rank';
import Logo from './Logo/Logo';
import FaceDetect from './FaceDetect/FaceDetect';
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
    imageUrl: state.onImageURLChange.imageURL,
    route: state.onRouteChange.route,
    isSignedIn: state.onRouteChange.isSignedIn,
    user: state.updateUserData.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(inputChange(event.target.value)),
    onRouteChange: (route) => dispatch(routeChange(route)),
    onSubmitImage: (user, input) => dispatch(image(user, input))
  }
}

class App extends Component {
  onImageSubmit = () => {
    this.props.onSubmitImage(this.props.user, this.props.input);
  }
  
  render(){
    const {user, isSignedIn, route, onRouteChange, onInputChange, input, imageUrl} = this.props;
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
            <ImageSubmitForm onInputChange = {onInputChange} onImageSubmit = {this.onImageSubmit} />
            {(imageUrl !== '')?(<FaceDetect imageUrl = {imageUrl}/>):(<div></div>)}
          </div>
        ): (route === 'profile')? (
          <Profile/>
        ): (route === 'signin')? (
          <SignIn onRouteChange = {onRouteChange}/>
        ): (<Register onRouteChange = {onRouteChange}/>)}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
