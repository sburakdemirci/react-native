import React, { Component } from 'react'
import {View,Text} from 'react-native'
import CalendarComponent from '../components/CalendarComponent'
import EventList from '../components/EventList'
import axios from 'axios'

export default class componentName extends Component {

 
        state={
            clickedDate: 'default',
            eventsToPass:[''],
            clickedEvent:'sa'
        }
    
    componentDidMount() {

        axios.get('http://192.168.1.36:8080/events/getEventByUserId',{
            params:{
              
              userId: 1
            }
          })
          .then(req => {
              const data= req.data.map(
                  
                (eventname) => eventname.event_name)
              console.log(data)
              this.setState({
                eventsToPass:data
            })
          //  console.log(this.state.eventsToPass)
          this.forceUpdate()
           
          })   

    }

    

    calendarClicked(newName)
    {
        this.setState({
            clickedDate:newName
        })

    }//this kullanılınca bind kullanılır


    onClickEventList(clicked){
        console.log(clicked)
        this.setState({
            clickedEvent:clicked
        })

    }
  render() {
   
    return (
        <View>
        <CalendarComponent changeLink={this.calendarClicked.bind(this)}/>  

        <EventList gecenprop={this.state.eventsToPass} clickedEventFinder={this.onClickEventList.bind(this)} />
        </View>
    )
  }
}
//   <Text>{this.state.clickedDate}</Text>
//<Text>{this.state.clickedEvent}</Text>
