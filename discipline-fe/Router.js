import { Scene, Router } from 'react-native-router-flux'

import React from 'react';
import Deneme from './Deneme';
import TestInput from './TestInput'

 const RouterComponent = () => {

    return(
        
        <Router>
            <Scene key="root">
            <Scene key="login" component={TestInput} title="dis is login" initial/>
            <Scene key="home" component={Deneme} title="dis is home" />
            </Scene>
        </Router>

    );
}
export default RouterComponent;


