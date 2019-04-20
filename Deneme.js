import axios from 'axios';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Deneme extends Component {
   
    state= {
        spring:""
        
      }
  
      componentDidMount() {
        axios.get('http://192.168.1.34:8080/api/test1')
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