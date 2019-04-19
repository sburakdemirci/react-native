import React, { Component } from 'react';
import  Router  from './src/Router'
export default class App extends Component {
 state=    this.state = {
  date: ''

};


pressed(day){
  console.log(day.dateString)
  this.setState({date: day.dateString})


}
  render() {
         
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

 
