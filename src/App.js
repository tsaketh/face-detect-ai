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
  render(){
    return(
      <div>
        <Navigation />
        <Logo />
        <SignIn />
        <Register />
        <Rank />
        <ImageSubmitForm />
        <FaceDetect />
      </div>
    )
  }
}

export default App;
