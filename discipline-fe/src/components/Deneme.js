import axios from 'axios';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux'
import { REACT_APP_API_HOST_URL } from 'react-native-dotenv'

class Deneme extends Component {
   
    state= {
        spring:""
        
      }
    
      componentDidMount() {
        axios.get(REACT_APP_API_HOST_URL+'/api/test1')
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
          Actions.eventcalendar();
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