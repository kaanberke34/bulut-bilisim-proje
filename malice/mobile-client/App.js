import React, { useState, useEffect, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext, CartContext } from './src/tools/context';

import { SignIn, Register } from './src/screens/AuthScreens';

import ProfileScreen from './src/screens/ProfileScreen';
import DrawerContent from './src/components/Drawer';
import TabsScreen from './src/components/BottomTab';


const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {!userToken ? (
      <RootStack.Screen
        name="Auth"
        component={AuthScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false
        }}
      />
    )}
  </RootStack.Navigator>
);

const AuthScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'Sign In' }}
    />
    <AuthStack.Screen
      name="Register"
      component={Register}
      options={{ title: 'Create Account' }}
    />
  </AuthStack.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
    drawerContent={props => <DrawerContent {...props} />}
  >
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  // useEffect(() => {
  //   const dev = async () => {
  //     try {
  //       await AsyncStorage.setItem(
  //         'token',
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkNzgyMTAzMTRmZTAwMDRiYmVlNjMiLCJpYXQiOjE2MjEwODY5NDZ9.nKb0fbphChfxG2QgWxQ94E2EBTlZX6PK-eebOx-LG0s'
  //       );
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   dev();
  // }, []);
  const authContext = useMemo(() => {
    return {
      signIn: async token => {
        //If token exist set user token to coming token
        setIsLoading(false), setUserToken(token);
        try {
          await AsyncStorage.setItem('token', token);
        } catch (err) {
          console.error(err);
        }
      },
      signOut: async () => {
        setIsLoading(false), setUserToken('');
        try {
          await AsyncStorage.removeItem('token');
        } catch (err) {
          console.error(err);
        }
      }
    };
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setUserToken(value);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
      setIsLoading(false);
    }, 1000);
  }, []);

  const [state, setState] = useState({
    cart: []
  });

  const addToCart = product =>
    setState({
      ...state,
      cart: state.cart.find(i => i._id === product._id)
        ? state.cart.map(i =>
            i._id === product._id ? { ...i, count: i.count + 1 } : i
          )
        : [...state.cart, { ...product, count: 1 }]
    });

  const increase = _id => {
    setState({
      ...state,
      cart: state.cart.map(i =>
        i._id === _id ? { ...i, count: i.count + 1 } : i
      )
    });
  };
  const decrease = _id => {
    setState({
      ...state,
      cart: state.cart.map(i =>
        i._id === _id ? { ...i, count: i.count > 1 ? i.count - 1 : 1 } : i
      )
    });
  };

  const removeFromCart = _id =>
    setState({
      ...state,
      cart: state.cart.filter(i => i._id !== _id)
    });
  const emptyCart = () => {
    setState({
      ...state,
      cart: []
    });
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <CartContext.Provider
        value={{
          state: state,
          addToCart,
          increase,
          decrease,
          emptyCart,
          removeFromCart
        }}
        
      >
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </CartContext.Provider>
    </AuthContext.Provider>
  );
};
