import React from 'react';
import { Text, Pressable, Image, View } from 'react-native';

import styles from './styles';

const ItemCard = ({ product, navigation }) => {
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.push('Details', {
          product
        })
      }
    >
      <Image
        style={styles.image}
        source={{
          uri: product.image
        }}
      />
      <View style={styles.right}>
        <Text style={styles.title} numberOfLines={3}>
          {product.title}
        </Text>
        <Text style={styles.price}>Fiyat: {product.price} TL</Text>
      </View>
    </Pressable>
  );
};

export default ItemCard;
