import React, { Component } from 'react'
import {  View } from 'react-native'
import { Container, Header, Content, Item, Input,CardItem,Button,Text,CheckBox,Body,Spinner,Footer } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class TestQuestion extends Component {
    constructor(props)
    {
        super(props)
        this.state= {
            loading: true
        }

    }
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
    { return <Spinner/>
      

    }
    else{
      return (
        <Container style={{paddingTop:'5%'}}>
        <Header >
          <Text style={{fontSize:22, color:'white',fontWeight:'bold',paddingTop:'2%'}}>Disiplin Testi</Text>
        </Header>
        <Content padder>
        <CardItem style={{marginBottom:'10%',paddingTop:'10%', borderRadius:20,borderWidth:1,borderColor:'blue'}}>
          <Text >
            Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   
            Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   
            Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   Soru kısmı   

          </Text>
 
          </CardItem>
       
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success
          
                >
                <Text > 1. cevap </Text></Button>
                <CardItem/>
               
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
                >
                <Text > 2. cevap </Text></Button>
                <CardItem/>
                
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
                >
                <Text > 3. cevap </Text></Button>
                <CardItem/>
              
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
                >
                <Text > 4. cevap </Text></Button>
                <CardItem/>
              
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
                >
                <Text > 5. cevap </Text></Button>
                <CardItem/>
        </Content>
       
    
      </Container>
  
      )
    }
  }
}