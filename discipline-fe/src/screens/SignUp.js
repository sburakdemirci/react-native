import React, { Component } from 'react'
import {Alert } from 'react-native'
import { Container, Header, Content, Item, Input,CardItem,Button,Text,CheckBox,Body,Spinner } from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'
import {Actions} from 'react-native-router-flux'
 
export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            loading: true ,
            name:'',
            email: '',
            password:''
        
        }
    }



    signUpRest()
     {
       console.log("sa")

      if(this.state.password!=='' && this.state.email!== '' && this.state.name!=='')
      {
      axios.get('http://192.168.1.36:8080/api/signUp',{
          params:{
            
            name:this.state.name,
            email: this.state.email,
            password: this.state.password

          }
        })
        .then(req => {
         
    
          if(req.data===true)
          {
           Alert.alert('Kayıt Başarılı, Başarıyla kaydoldunuz!! Giriş ekranına yönlendiriliyorsunuz')  
            setTimeout(() => {
              Actions.login();
            }, 2000);
    
    
          }
          else{
            Alert.alert('Kayıt Başarısız, girdiğiniz bilgileri yada internet bağlantınızı kontrol ediniz.')

           
          }
        })
      }
      else
      {
          Alert.alert('Kayıt Başarısız, lütfen bilgileri eksiksiz giriniz')
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
    {
        return <Spinner/>
    }
    else{

    
    return (
        <Container style={{paddingTop:26}}>
             

        <Header>

          <Text style={{fontSize:20, color:'white',paddingTop:10}} >Kayıt Ol</Text>
        </Header>
        <CardItem/>
        <CardItem/>
        <Content style={{paddingTop:30}}>
  
        <Item regular style={{alignSelf:'center',width:'60%'}}>
            <Input style={{textAlign:'center'}} 
            placeholder='Ad Soyad' 
            onChangeText={(name) => this.setState({name})}
             />
          </Item>
          <CardItem/>

        <Item regular style={{alignSelf:'center',width:'60%'}}>
            <Input style={{textAlign:'center'}} 
            placeholder='Email' 
            onChangeText={(email) => this.setState({email})}
             />
          </Item>
            <CardItem/>
            <Item regular style={{alignSelf:'center',width:'60%'}}>
            <Input secureTextEntry={true} style={{textAlign:'center'}}
             placeholder='Parola'
             onChangeText={(password) => this.setState({password})}

             />
          </Item>
          

          <CardItem/>
            <Button
             style={{alignSelf:'center',width:'60%',justifyContent:'center'}}
            success
            onPress={this.signUpRest.bind(this)}
   
              >
              <Text > Kayıt Ol </Text></Button>
              <CardItem/>
         
               
        
        </Content>
        
      </Container>
    )
  }
}
}
