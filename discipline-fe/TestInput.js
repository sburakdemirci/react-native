import React, { Component } from 'react';
import {Button} from 'react-native';

import { AppRegistry, Text, TextInput, View } from 'react-native';
import axios from 'axios';

export default class TestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',
  spring:''
  };
  }

  render() {
  

    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>{this.state.spring}</Text>
        <Button  
  onPress={() => {

    axios.get('http://192.168.1.34:8080/api/test',{
      params:{
        
        string: this.state.text
      }
    })
    .then(req => this.setState(
      {spring:req.data+333}
    ))

  }}
  title="Press Me"
/>
      </View>
    );
  }
}