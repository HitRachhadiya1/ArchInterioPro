import React from 'react';
import Navigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Loginprovider} from './src/context/login_context';
import {Basicprovider} from './src/context/basic_context';
import {useEffect} from 'react';
import {
  NotificationListner,
  requestUserPermission,
} from './src/utils/pushnotification_helper';

const App = () => {
  return (
    <Loginprovider>
      <Basicprovider>
        <Navigation />
      </Basicprovider>
    </Loginprovider>
  );
};

export default App;
