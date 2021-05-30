import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Button,
  View,
  TextInput,
  Text,
  Pressable
} from 'react-native';

import axios from 'axios';

import styles from './styles';

import ItemCard from '../../components/ItemCard';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState(products);
  const [search, setSearch] = useState('');

  const getProducts = async () => {
    try {
      const res = await axios.get('/db/products');
      setProducts(res.data);
      setFilteredData(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = event => {
    let value = event.nativeEvent.text.toString().toLowerCase();
    //console.log(value);
    let result = [];
    result = products.filter(data => {
      return data.title.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.drawerBtn}
        onPress={() => navigation.toggleDrawer()}
      >
        <SimpleLineIcons name="drawer" size={30} color="#ec6b41" />
        <Text style={styles.drawerText}>Menu</Text>
      </Pressable>

      <View style={styles.search}>
        <MaterialIcons name="search" size={35} color="#ec6b41" />
        <TextInput
          style={styles.searchInput}
          placeholder="Arama"
          placeholderTextColor="#bfd1db"
          onChange={event => handleSearch(event)}
        />
      </View>

      <ScrollView>
        {filteredData.map(product => (
          <ItemCard
            product={product}
            navigation={navigation}
            key={product._id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
