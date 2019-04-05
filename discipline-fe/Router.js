import { Scene, Router } from 'react-native-router-flux'

import React from 'react';
import Deneme from './Deneme';
import TestInput from './TestInput'
import AjandaDeneme from './AjandaDeneme'


 const RouterComponent = () => {

    return(
        
        <Router>
            <Scene key="root">
            <Scene key="login" component={TestInput} title="dis is login" />
            <Scene key="home" component={Deneme} title="dis is home" initial />
            <Scene key="ajanda" component = {AjandaDeneme} title ="dis is ajanda"/>
            </Scene>
        </Router>

    );
}
export default RouterComponent;


