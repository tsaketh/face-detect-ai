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
const particleParams = {
  number: {
    density: {
      enable: true,
      value_area: 800,
    },
    value: 80
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      user: {},
      route:'signin',
      isSignedIn:false
    }
  }
  getUser = (user) => {
    this.setState({user: user});
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  onImageSubmit = () =>{
    this.setState({imageUrl: this.state.input})
    fetch("https://smart-brain-login-ts110798.herokuapp.com/image", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"id": this.state.user.id})
    }).then(Response => {
      if (Response.status === 200) {
        return Response.json();
      } else {
        return -1;
      }
    }).then(user => {
      if (user === -1) {
        alert("Server unresponsive. Please check your internet connection as first troubleshooting measure. Try again after sometime")
      } else {
        this.setState({user: user});
      }
    }).catch(alert);
    this.onRouteChange('home');
  }
  // faceBox(){

  // }
  onRouteChange=(route)=>{
    if (route === 'home' || route === 'profile') {
      this.setState({isSignedIn: true});
    } else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }
  render(){
    return(
      <div>
        <Particles className='my-particles' params = {particleParams}/>
        <Navigation isSignedIn = {this.state.isSignedIn} route = {this.state.route} onRouteChange = {this.onRouteChange}/>
        {(this.state.route === 'home')? (
          <div>
            <Logo />
            <Rank user = {this.state.user}/>
            <ImageSubmitForm onInputChange = {this.onInputChange} onImageSubmit = {this.onImageSubmit}/>
            {(this.state.imageUrl !== '')?(<FaceDetect imageUrl = {this.state.imageUrl}/>):(<div></div>)}
          </div>
        ): (this.state.route === 'profile')? (
          <Profile userInfo = {this.state.user}/>
        ): (this.state.route === 'signin')? (
          <SignIn onRouteChange = {this.onRouteChange} getUser = {this.getUser}/>
        ): (<Register onRouteChange = {this.onRouteChange} getUser = {this.getUser}/>)}
      </div>
    )
  }
}

export default App;
