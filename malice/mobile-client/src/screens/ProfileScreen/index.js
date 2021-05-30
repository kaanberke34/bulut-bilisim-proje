import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from '../../tools/context';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const ProfileScreen = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);

  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setUserToken(value);
      }
    } catch (err) {
      console.log(err);
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

  const updateUser = async () => {
    let updatedUser = {};

    if (name) updatedUser.name = name;
    if (email) updatedUser.email = email;
    if (password) updatedUser.password = password;
    try {
      await axios.post('/user/updateUser', updatedUser, {
        headers: header
      });
      getUser();
    } catch (err) {
      console.log('err:', err.response);
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
    <ScrollView style={styles.container}>
      <View style={styles.blockContaier1}>
        <Pressable
          style={styles.menuBtn}
          onPress={() => navigation.toggleDrawer()}
        >
          <SimpleLineIcons name="drawer" size={30} color="#ec6b41" />
          <Text style={styles.menuText}>Menu</Text>
        </Pressable>
        <Text style={styles.changeInfo}>
          !!! Bilgilerinizi değiştirmek isterseniz bu formu kullanabilirsiniz.
        </Text>
        <View style={styles.blockContainer2}>
          <Text style={styles.text}>
            Adınız:{' '}
            <Text style={styles.textInner}>{user.name || 'Loading..'}</Text>
          </Text>

          <Octicons
            style={styles.iconCenter}
            name="arrow-small-down"
            size={30}
            color="#ec6b41"
          />
          <TextInput
            style={styles.textInput}
            textContentType="name"
            autoCapitalize="none"
            placeholder="Tam Adınız"
            placeholderTextColor="#bfd1db"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.blockContainer2}>
          <Text style={styles.text}>
            E-mail Adresiniz:{' '}
            <Text style={styles.textInner}>{user.email || 'Loading..'}</Text>
          </Text>

          <TextInput
            style={styles.textInput}
            textContentType="emailAddress"
            autoCapitalize="none"
            placeholder="ornek@ornek.com"
            placeholderTextColor="#bfd1db"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.blockContainer2}>
          <Text style={styles.text}>Şifreniz</Text>
          <TextInput
            style={styles.textInput}
            textContentType="password"
            placeholder="Şifre"
            placeholderTextColor="#bfd1db"
            autoCapitalize="none"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Pressable
          style={styles.borderButtonsLight}
          onPress={() => updateUser()}
        >
          <Text style={styles.buttonTextLight}>Güncelle</Text>
        </Pressable>
      </View>

      <Pressable style={styles.borderButtonsDark} onPress={() => signOut()}>
        <Text style={styles.buttonTextDark}>Çıkış Yap</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProfileScreen;
