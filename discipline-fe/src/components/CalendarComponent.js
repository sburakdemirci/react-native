import React, { Component } from 'react'
import {Calendar} from 'react-native-calendars'
import * as moment from 'moment'

export default class CalendarComponent extends Component {
  state={
    date:'2019-04-19'
  }
  pressed(day){
   
    this.setState({date: day.dateString})
    this.props.changeLink(day.dateString)
  
  }

  componentDidMount() {
    
    var formattedDate = new Date();
    var newDate = formattedDate.getDay().toString() + " " + formattedDate.getMonth().toString() + " " + formattedDate.getYear().toString();
  
    this.setState({
      date:newDate.dateString
    })
  }
  
  render() {
    return (
        <Calendar style={{paddingTop:'8%'}}
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
