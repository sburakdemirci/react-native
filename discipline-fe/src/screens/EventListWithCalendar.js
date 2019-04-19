import React, { Component } from 'react'
import {View,Text} from 'react-native'
import CalendarComponent from '../components/CalendarComponent'
import EventList from '../components/EventList'
import axios from 'axios'
import { REACT_APP_API_HOST_URL } from 'react-native-dotenv'




export default class componentName extends Component {


  

        state={
            clickedDate: 'default',
            eventsToPass:[''],
            clickedEvent:'sa'
        }
    
    componentWillMount() {

        console.log(REACT_APP_API_HOST_URL)
       axios.get(REACT_APP_API_HOST_URL+'/event/getEventsByUserId',{
            params:{
              
              userId: 1
            }
          })
          .then(req => {
       
              var data= req.data.map(
                
                (eventname) => eventname.event_name
              
                )
              
           
              this.setState({
                eventsToPass:data
            })
          this.forceUpdate()

           
          //  console.log(this.state.eventsToPass
           
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
