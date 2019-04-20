import React, { Component } from 'react';
import  Router  from './src/Router'
import AddRoutine from './src/components/AddRoutine'
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
     //<Router/>
      <AddRoutine/>
    )
  }
}

 styles = {
  deneme: {
    paddingTop: 200
  }
}

 
