import { Scene, Router } from 'react-native-router-flux'

import React from 'react';
import Deneme from './components/Deneme';
import TestInput from './components/TestInput'
import AjandaDeneme from './components/AjandaDeneme'
import Login from './components/Login'
import CalendarComponent from './components/CalendarComponent'
import EventListWithCalendar from '../src/screens/EventListWithCalendar'


 const RouterComponent = () => {

    return(
        
        <Router>
            <Scene key="root">
            <Scene key="login" component={TestInput} title="dis is login" initial/>
            <Scene key="home" component={Deneme} title="dis is home"  />
            <Scene key="ajanda" component = {AjandaDeneme} title ="dis is ajanda" />
            <Scene key="ajanda" component = {CalendarComponent} title ="dis is ajanda" />
            <Scene key="login" component = {Login} title ="Login" hideNavBar={true} />
            <Scene key="eventcalendar" component={EventListWithCalendar}  />
            </Scene>
        </Router>

    );
}
export default RouterComponent;


