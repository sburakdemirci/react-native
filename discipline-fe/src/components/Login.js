import React, { Component } from 'react';
import {Alert} from 'react-native'

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'
import {Actions} from 'react-native-router-flux'


import { Container, Header, Content, Form, Item, Input,Left,Body,Title,Right,CardItem,Card, Label,Button,Text } from 'native-base';

export default class FloatingLabelExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            loading: true ,
            email: '',
            spring:'',
            password:''
        
        }
    }
    loginControlFunction(){
        
        if(this.state.password!=='' && this.state.email!== '')
        {
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
        }
        else
        {
            Alert.alert('Eksik Bilgi','Kullanıcı adı veya şifre boş olamaz')
        }
    }

//öncelikle fontların yüklenmesi lazım oldugu için loading değişkeni yaptık ve fontlar load olduktan sonra itemler gösteriliyor.
    async componentWillMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ loading: false });
      }


      
  render() {
      if(this.state.loading)
      {
        return <Expo.AppLoading />;

      }
    return (
        <Container>
        <Header/>
        <Content style={{paddingTop:30}}>
  
       
        <Item regular style={{alignSelf:'center',width:'60%'}}>
            <Input style={{textAlign:'center'}} 
            placeholder='Email' 
            onChangeText={(email) => this.setState({email})}
             />
          </Item>
            <CardItem/>
            <Item regular style={{alignSelf:'center',width:'60%'}}>
            <Input style={{textAlign:'center'}}
             placeholder='Parola'
             onChangeText={(password) => this.setState({password})}
             />
          </Item>
             
            <CardItem/>
            
            <Button
             style={{alignSelf:'center',width:'60%',justifyContent:'center'}}
            success
            onPress={this.loginControlFunction.bind(this)


            }
              >
              <Text > Giriş </Text></Button>
            
            
        
        </Content>
        
      </Container>
    );
  }
}