import React, { Component } from 'react'
import {View,Text} from 'react-native'
import CalendarComponent from '../components/CalendarComponent'
import EventList from '../components/EventList'

export default class componentName extends Component {

    constructor()
    {
        super()
        this.state={
            homeLink: 'default',
            propp:['event1','event2','event3','event4','event5','event6','event7'],
            clickedEvent:'sa'
        }
    }

    onChangeLinkName(newName)
    {
        this.setState({
            homeLink:newName,
            propp:[newName,newName]
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
        <CalendarComponent changeLink={this.onChangeLinkName.bind(this)}/>  
        <Text>{this.state.homeLink}</Text>
        <Text>{this.state.clickedEvent}</Text>
        <EventList gecenprop={this.state.propp} clickedEventFinder={this.onClickEventList.bind(this)} />
        </View>
    )
  }
}
