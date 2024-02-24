import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screen components
import Home from '../screens/Home';
import Book from '../screens/book';
import Mytrip from '../screens/Mytrip';
import Profile from '../screens/Profile';
import MyTickets from '../screens/MyTickets';
import categories from '../screens/categories';

const Tab = createBottomTabNavigator();

export default function tab() {
  return (
      <Tab.Navigator
        initialRouteName='home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Categorie') {
              iconName = focused ? 'apps' : 'apps-outline';
            } else if (route.name === 'Tickets') {
              iconName = focused ? 'film' : 'film-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#DC0000',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: { backgroundColor: '#292928' },
        })}
      >
        <Tab.Screen name="Home" options={{ headerShown: false }}  component={Home} />
        <Tab.Screen name="Categorie" options={{ headerShown: false }} component={categories} />
        <Tab.Screen name="Tickets" options={{ headerShown: false }} component={MyTickets} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}
