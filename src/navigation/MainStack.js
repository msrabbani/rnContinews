import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../app/Home';
import Technology from '../app/Technology';
import DetailsNews from '../app/DetailsNews';
import Profile from '../app/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="duck" color={'#333'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Technology"
        component={Technology}
        options={{
          // tabBarLabel: 'Technology',
          tabBarIcon: ({color, size}) => (
            <Icon name="duck" color={'#333'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="duck" color={'#333'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false, title: 'Home'}}
      />
      <Stack.Screen name="DetailsNews" component={DetailsNews} />
    </Stack.Navigator>
  );
}
