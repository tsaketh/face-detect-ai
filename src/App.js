import React, { Component } from 'react';
import './App.css';
import SignIn from './SignIn/signIn';
import ImageSubmitForm from './ImageSubmitForm/ImageSubmitForm';
import Navigation from './Navigation/Navigation';
import Rank from './Rank/Rank';
import Logo from './Logo/Logo';
import FaceDetect from './FaceDetect/FaceDetect';
import Register from './Register/Register';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      user: {},
      // box = {},
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
    fetch("http://localhost:3001/image", {
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
        console.log(user);
      } else {
        this.setState({user: user});
      }
    }).catch(console.log);
    this.onRouteChange('home');
  }
  // faceCalculation(){

  // }
  // faceBox(){

  // }
  onRouteChange=(route)=>{
    if (route === 'home') {
      this.setState({isSignedIn: true});
    } else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route})
  }
  render(){
    return(
      <div>
        <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
        <Logo />
        {(this.state.route === 'home')? (
          <div>
            <Rank user = {this.state.user}/>
            <ImageSubmitForm onInputChange = {this.onInputChange} onImageSubmit = {this.onImageSubmit}/>
            <FaceDetect imageUrl = {this.state.imageUrl}/>
          </div>
        ): ((this.state.route === 'signin')? (
          <SignIn onRouteChange = {this.onRouteChange} getUser = {this.getUser}/>
        ): (<Register onRouteChange = {this.onRouteChange} getUser = {this.getUser}/>))}
      </div>
    )
  }
}

export default App;
