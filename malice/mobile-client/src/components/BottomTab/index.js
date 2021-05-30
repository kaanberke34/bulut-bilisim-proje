import React from 'react';
import styles from './styles';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import DetailsScreen from '../../screens/DetailsScreen';

import Entypo from 'react-native-vector-icons/Entypo';
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      screenOptions={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </HomeStack.Navigator>
);

const BottomTab = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        style: {
          ...styles.bottomTab
        },
        inactiveTintColor: '#bfd1db',
        activeTintColor: '#ec6b41'
      }}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Ana Sayfa',
          tabBarIcon: () => <Entypo name="home" color="#ec6b41" size={24} />
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Sepet',
          tabBarIcon: () => (
            <Entypo name="shopping-cart" color="#ec6b41" size={24} />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTab;
