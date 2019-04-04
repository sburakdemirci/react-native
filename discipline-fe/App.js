import React, { Component } from 'react';
import {Button} from 'react-native';
import TestInput from './TestInput'
import Deneme from './Deneme'
import  Router  from './Router'

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
 
  render() {
         
    return (
      <Router/>
  
    )
  }
}

 styles = {
  deneme: {
    paddingTop: 200
  }
}

 
