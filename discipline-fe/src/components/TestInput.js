import React, { Component } from 'react';
import {Button} from 'react-native';

import { AppRegistry, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import {Actions} from 'react-native-router-flux'
import { REACT_APP_API_HOST_URL } from 'react-native-dotenv'

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

    axios.get(REACT_APP_API_HOST_URL+'/api/login',{
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