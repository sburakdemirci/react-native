import { Scene, Router } from 'react-native-router-flux'

import React from 'react';
import Deneme from './components/Deneme';
import TestInput from './components/TestInput'
import AjandaDeneme from './components/AjandaDeneme'
import Login from './components/Login'
import EventListWithCalendar from '../src/screens/EventListWithCalendar'
import SignUp from './screens/SignUp'
import DisciplineTest from './screens/DisciplineTest'



 const RouterComponent = () => {

    return(
        
        <Router>
            <Scene key="root">
            <Scene key="login" component={TestInput} title="dis is login" />
            <Scene key="home" component={Deneme} title="dis is home"  /> 
            <Scene key="login" component = {Login} title ="Login" hideNavBar={true} />
            <Scene key="eventcalendar" component={EventListWithCalendar}  />
            <Scene key="signUp" component={SignUp} hideNavBar={true} />
            <Scene key="discipline" component={DisciplineTest} hideNavBar={true}  initial/>
            </Scene>
        </Router>

    );
}
export default RouterComponent;


