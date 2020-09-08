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
      // box = {},
      route:'signin',
      isSignedIn:false
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  onImageSubmit = () =>{
    this.setState({imageUrl: this.state.input})
    console.log("click")
  }
  // faceCalculation(){

  // }
  // faceBox(){

  // }
  onRouteChange=(route)=>{
    if (route === 'home') {
      this.setState({isSignedIn: true})
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
            <Rank />
            <ImageSubmitForm onInputChange = {this.onInputChange} onImageSubmit = {this.onImageSubmit}/>
            <FaceDetect imageUrl = {this.state.imageUrl}/>
          </div>
        ): ((this.state.route === 'signin')? (
          <SignIn onRouteChange = {this.onRouteChange}/>
        ): (<Register onRouteChange = {this.onRouteChange}/>))}
      </div>
    )
  }
}

export default App;
