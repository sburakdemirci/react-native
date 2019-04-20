import React, { Component } from 'react';
import {Button} from 'react-native';

import { AppRegistry, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import {Actions} from 'react-native-router-flux'

export default class TestInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      spring:'',
      password:''
    };
  }

  render() {
  

    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="email girin"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
        style={{height:40,paddingTop:15,alignItems:'center'}}
        placeholder="Parolanızı giriniz"
        onChangeText={(password) => this.setState({password})}
        />


        <Text>{this.state.spring}</Text>
        <Button  
  onPress={() => {

    axios.get('http://192.168.1.36:8080/api/login',{
      params:{
        
        email: this.state.email,
        password: this.state.password
      }
    })
    .then(req => {
      var result;

      if(req.data===true)
      {
        Actions.home();
        console.log("true")


      }
      else{
        this.setState(
          {
            spring:'noo fuckin way'
          }
        )
      }
  

    })

  }}
  title="Giriş"
/>
      </View>
    );
  }
}