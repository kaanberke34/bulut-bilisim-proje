import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView
} from 'react-native';
import axios from 'axios';

import { AuthContext } from '../../tools/context';

import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    //Do login stuff en push to token
    try {
      const res = await axios.post('/auth/login', {
        email: email,
        password: password
      });
      signIn(res.data.token);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <ScreenContainer>
      <Image style={styles.logo} source={require('../../assets/malice.png')} />
      <Text style={styles.header}>Bir Satış Uygulamasından Fazlası </Text>
      <Text style={styles.header2}>Giriş Yap</Text>
      <MaterialIcons name="arrow-downward" size={30} color="#ec6b41" />
      <View style={styles.formDesign}>
        <MaterialIcons name="alternate-email" size={30} color="#ec6b41" />
        <TextInput
          style={styles.emailInput}
          textContentType="emailAddress"
          autoCapitalize="none"
          placeholder="ornek@ornek.com"
          placeholderTextColor="#bfd1db"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.formDesign}>
        <MaterialIcons name="lock-outline" size={30} color="#ec6b41" />
        <TextInput
          style={styles.passwordInput}
          textContentType="password"
          placeholder="Şifre"
          autoCapitalize="none"
          placeholderTextColor="#bfd1db"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <Pressable style={styles.buttonLogin} onPress={() => login()}>
        <Text style={styles.pressableTextLogin}> Giriş </Text>
      </Pressable>

      <Text style={styles.header2}>Hesabınız Yoksa...</Text>
      <MaterialIcons
        name="arrow-downward"
        style={{ marginBottom: 5 }}
        size={30}
        color="#ec6b41"
      />
      <Pressable
        style={styles.buttonRegister}
        onPress={() => navigation.push('Register')}
      >
        <Text style={styles.pressableTextRegister}>Kayıt Ol</Text>
      </Pressable>
    </ScreenContainer>
  );
};

export const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    //Do register work and then push signIn page
    try {
      const res = await axios.post('/auth/register', {
        name: name,
        email: email,
        password: password
      });
      navigation.push('SignIn');
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <ScreenContainer>
      <Text style={styles.header2}>Kayıt Ol</Text>
      <View style={styles.formDesign}>
        <MaterialIcons
          name="drive-file-rename-outline"
          size={30}
          color="#ec6b41"
        />
        <TextInput
          style={styles.emailInput}
          textContentType="name"
          placeholder="Tam Adınız"
          autoCapitalize="none"
          placeholderTextColor="#bfd1db"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.formDesign}>
        <MaterialIcons name="alternate-email" size={30} color="#ec6b41" />
        <TextInput
          style={styles.emailInput}
          textContentType="emailAddress"
          placeholder="ornek@ornek.com"
          placeholderTextColor="#bfd1db"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.formDesign}>
        <MaterialIcons name="lock-outline" size={30} color="#ec6b41" />
        <TextInput
          style={styles.passwordInput}
          textContentType="newPassword"
          placeholder="Şifre"
          placeholderTextColor="#bfd1db"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <Pressable style={styles.buttonRegister} onPress={() => register()}>
        <Text style={styles.pressableTextRegister}>Kayıt Ol</Text>
      </Pressable>
    </ScreenContainer>
  );
};
