import React, { Component } from 'react'
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


    questionAnswered(clicked){
      this.props.questionAnsweredChange(clicked)
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
              {this.props.question}
          </Text>
 
          </CardItem>
       
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success
              onPress={()=>this.questionAnswered(1)}>
                
                <Text > {this.props.answer_1} </Text></Button>
                <CardItem/>
               
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
              onPress={()=>this.questionAnswered(2)}>
                <Text >  {this.props.answer_2} </Text></Button>
                <CardItem/>
                
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
              onPress={()=>this.questionAnswered(3)}>
                <Text >  {this.props.answer_3} </Text></Button>
                <CardItem/>
              
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
              onPress={()=>this.questionAnswered(4)}>
                <Text > {this.props.answer_4} </Text></Button>
                <CardItem/>
              
              <Button
               style={{alignSelf:'center',width:'80%',justifyContent:'center'}}
              success          
              onPress={()=>this.questionAnswered(5)}>
                <Text >  {this.props.answer_5} </Text></Button>
                <CardItem/>
        </Content>
       
    
      </Container>
  
      )
    }
  }
}