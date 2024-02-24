import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';
import tab from './tabs/tab';
import FirstScreen from './screens/FirstScreen';
import MovieScreen from './screens/MovieScreen';
import BuyTicket from './screens/BuyTicket';
import CategoriePage from './screens/CategoriePage';
import ChangePassword from './screens/ChangePassword';
import EditProfile from './screens/EditProfile';
import Profile from './screens/Profile';
import Scanqr from './screens/Scanqr';
import SeeTicket from './screens/SeeTicket';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstScreen'>
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scanqr" component={Scanqr} options={{ headerShown: false }} />
        <Stack.Screen name="SeeTicket" component={SeeTicket} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={tab}   options={{ headerShown: false }} 
            
          />
            
        <Stack.Screen name="MovieScreen" component={MovieScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BuyTicket" component={BuyTicket} options={{ headerShown: false }} />
        <Stack.Screen name="CategoriePage" component={CategoriePage} options={{ headerShown: false }} />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
         <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
