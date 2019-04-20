import React, { Component } from 'react';
import {Alert} from 'react-native'

import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import { REACT_APP_API_HOST_URL } from 'react-native-dotenv'


import { Container, Header, Content, Form, Item, Input,Left,Body,Title,Right,CardItem,Card, Label,Button,Text,DatePicker } from 'native-base';

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
        axios.get(REACT_APP_API_HOST_URL+'/api/signIn',{
            params:{
              
              email: this.state.email,
              password: this.state.password
            }
          })
          .then(req => {
            var result;
      
            if(req.data===true)
            {
              Actions.eventcalendar();
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
      <Header />
      <Content>
      <CardItem/>

      <Item regular style={{alignSelf:'center',width:'60%'}}>
            <Input style={{textAlign:'center'}} 
            placeholder='Etkinlik Adı'   
             />
          </Item>
            <CardItem/>

            <Item style={{alignSelf:'center'}}>
            <DatePicker 
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="bitiş zamanı"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </Item>
        
      </Content>
  
    </Container>
    );
  }
}