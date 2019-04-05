import React, { Component } from 'react'
import {Calendar} from 'react-native-calendars'

export default class CalendarComponent extends Component {
  state={
    date:'2019-04-19'
  }
  pressed(day){
    console.log(day.dateString)
    this.setState({date: day.dateString})
  
  }
  render() {
    return (
        <Calendar style={{paddingTop:100}}
        // Collection of dates that have to be marked. Default = {}
        markedDates={{
          [this.state.date]: { selected: true },
          '2019-04-18': {marked: true}
          }}
        minDate="2019-02-01"
        onDayPress={
          day => 
         this.pressed(day)
          }
      />
      
    )
  }
}
