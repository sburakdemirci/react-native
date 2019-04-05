import axios from 'axios';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux'

class Deneme extends Component {
   
    state= {
        spring:""
        
      }
    
      componentDidMount() {
        axios.get('http://192.168.1.36:8080/api/test1')
        .then(req => this.setState(
          {spring:req.data}
        ))
      }
      
      render() {
        return (
          <View style ={styles.container}>
    
        <Text>
          {this.state.spring}
        </Text>
        <Button title="sad" onPress= {()=>{
          Actions.ajanda();
        }
        
      }
         />
    
          </View>
        );
      }
}

export default Deneme;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });