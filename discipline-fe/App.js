import React, { Component } from 'react';
import {Button} from 'react-native';
import TestInput from './TestInput'
import Deneme from './Deneme'
import  Router  from './Router'
import {Calendar,Agenda} from 'react-native-calendars'
import EventList from './EventList'


import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
 state=    this.state = {
  date: ''

};

pressed(day){
  console.log(day.dateString)
  this.setState({date: day.dateString})

}
  render() {
         
    const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};
var array = ['row 1', 'row 2']

    return (
      <Router/>
    
    
  
    )
  }
}

 styles = {
  deneme: {
    paddingTop: 200
  }
}

 
