import React, { useContext } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';

import styles from './styles';

import { CartContext } from '../../tools/context';

import ImageCarousel from './ImageCarousel';


const DetailsScreen = ({ route }) => {
  const context = useContext(CartContext);

  //console.log(context);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{route.params.product.title}</Text>
      <ImageCarousel images={route.params.product.imgURLs} />
      <Text style={styles.description}>{route.params.product.description}</Text>

      <Text style={styles.price}>
        Fiyat:{' '}
        <Text style={styles.priceInner}>{route.params.product.price}</Text> TL
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => context.addToCart(route.params.product)}
      >
        <Text style={styles.basketText}>Sepete Ekle</Text>
      </Pressable>
    </ScrollView>
  );
};

export default DetailsScreen;
