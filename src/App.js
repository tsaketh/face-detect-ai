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
import { image, inputChange, routeChange, signoutUser } from './Actions';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';

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
    isSignedIn: state.updateUserData.isSignedIn,
    user: state.updateUserData.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (event) => dispatch(inputChange(event.target.value)),
    onRouteChange: (route) => dispatch(routeChange(route)),
    onSubmitImage: (user, input) => dispatch(image(user, input)),
    onUserSignOut: () => dispatch(signoutUser())
  }
}

class App extends Component {
  onImageSubmit = () => {
    this.props.onSubmitImage(this.props.user, this.props.input);
  }
  
  render(){
    const {user, isSignedIn, route, onRouteChange, onInputChange, imageUrl, onUserSignOut} = this.props;
    const bodyElement = document.getElementsByTagName('body');
    console.log(user)
    if(user.hasOwnProperty("start_color") && user.hasOwnProperty("end_color")){
      bodyElement.item(0).style.backgroundImage = "linear-gradient(to right, "+user.start_color+", "+user.end_color+")";
    } else {
      bodyElement.item(0).style.backgroundImage = "linear-gradient(to right, #859398, #283048)";
    }
    return(
      <Router>
        {isSignedIn?<Redirect to={`/${route}`}/>:<></>}
        <Switch>
          <Route path="/signin">
            <Particles className='my-particles' params = {particleParams}/>
            <Navigation isSignedIn = {isSignedIn} route = {route} onRouteChange = {onRouteChange} onUserSignOut = {onUserSignOut} avatarId = {user.avatar_id}/>
            <SignIn onRouteChange = {onRouteChange}/>
          </Route>
          <Route path="/signup">
            <Particles className='my-particles' params = {particleParams}/>
            <Navigation isSignedIn = {isSignedIn} route = {route} onRouteChange = {onRouteChange} onUserSignOut = {onUserSignOut} avatarId = {user.avatar_id}/>
            <Register onRouteChange = {onRouteChange}/>
          </Route>
          <Route path="/profile">
            {!isSignedIn?<Redirect to="/signin"/>:<></>}
            <Particles className='my-particles' params = {particleParams}/>
            <Navigation isSignedIn = {isSignedIn} route = {route} onRouteChange = {onRouteChange} onUserSignOut = {onUserSignOut} avatarId = {user.avatar_id}/>
            <Profile/>
          </Route>
          <Route path="/">
            {!isSignedIn?<Redirect to="/signin"/>:<></>}
            <Particles className='my-particles' params = {particleParams}/>
            <Navigation isSignedIn = {isSignedIn} route = {route} onRouteChange = {onRouteChange} onUserSignOut = {onUserSignOut} avatarId = {user.avatar_id}/>
            <div>
              <Logo />
              <Rank user = {user}/>
              <ImageSubmitForm onInputChange = {onInputChange} onImageSubmit = {this.onImageSubmit} />
              {(imageUrl !== '')?(<FaceDetect imageUrl = {imageUrl}/>):(<div></div>)}
            </div>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
