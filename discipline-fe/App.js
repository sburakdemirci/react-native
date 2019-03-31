import React, { Component } from 'react';
import {Button} from 'react-native';
import TestInput from './TestInput'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
 
  render() {
         
    return (
      <View style={styles.deneme} >
      <TestInput/>
      </View>
      
    )
  }
}

 styles = {
  deneme: {
    paddingTop: 300
  }
}

 
