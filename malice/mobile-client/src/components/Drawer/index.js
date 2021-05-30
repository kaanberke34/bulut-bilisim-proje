import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import { AuthContext } from '../../tools/context';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Entypo from 'react-native-vector-icons/Entypo';

const Drawer = props => {
  const { signOut } = useContext(AuthContext);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState({});

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
  let header = {
    token: userToken
  };

  const getUser = async () => {
    try {
      const res = await axios.get('/user/getUser', {
        headers: header
      });
      setUser(res.data.user);
    } catch (err) {
      console.log('err:', err.response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    header = {
      token: userToken
    };
    getUser();
  }, [userToken]);
  return (
    <View style={styles.container}>
      <Text style={styles.textH1}>Hoşgeldiniz..</Text>

      <Text style={styles.text}>{user.name || 'Yükleniyor..'}</Text>
      <View style={styles.buttons}>
        <Pressable
          style={styles.drawerBtn}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Entypo style={styles.icon} name="home" color="#ec6b41" size={24} />
          <Text style={styles.drawerBtnText}>Ana Sayfa</Text>
        </Pressable>

        <Pressable
          style={styles.drawerBtn}
          onPress={() => props.navigation.navigate('Profile')}
        >
          <MaterialCommunityIcons
            style={styles.icon}
            name="account-arrow-right-outline"
            size={30}
            color="#ec6b41"
          />
          <Text style={styles.drawerBtnText}>Profil</Text>
        </Pressable>

        <Pressable style={styles.drawerBtn} onPress={() => signOut()}>
          <Entypo
            style={styles.icon}
            name="log-out"
            color="#ec6b41"
            size={24}
          />
          <Text style={styles.drawerBtnText}>Çıkış Yap</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Drawer;
