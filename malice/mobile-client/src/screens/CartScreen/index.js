import React, { useContext } from 'react';
import { View, ScrollView, Text, Pressable, Image, Alert } from 'react-native';
import { CartContext } from '../../tools/context';
import styles from './styles';
const CartScreen = ({ navigation }) => {
  const context = useContext(CartContext);
  const complete = () => {
    Alert.alert('Tebrikler Alışveriş Başarılı'), context.emptyCart();
  };
  const totalAmount = context.state.cart.reduce(
    (total, product) => (total = total + product.price * product.count),
    0
  );

  //console.log(totalAmount);
  //console.log(context.state.cart);

  return (
    <View style={styles.container}>
      {context.state.cart.length > 0 ? (
        <ScrollView>
          <Pressable
            style={styles.emptyCart}
            onPress={() => context.emptyCart()}
          >
            <Text style={styles.text}>Sepeti Boşalt</Text>
          </Pressable>
          <Pressable style={styles.emptyCart} onPress={() => complete()}>
            <Text style={styles.text}> Alışverişi Tamamla</Text>
          </Pressable>
          <Text style={styles.textLight}>
            Toplam : {parseInt(totalAmount)} TL
          </Text>
          {context.state.cart.map(product => (
            <View style={styles.cartItem} key={product._id}>
              <Image
                style={styles.image}
                source={{
                  uri: product.image
                }}
              />
              <View style={styles.rightContainer}>
                <Text style={{ marginBottom: 15 }}>{product.title}</Text>
                <Text style={{ textAlign: 'center' }}>
                  {product.count} Adet
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Pressable
                  style={styles.plus}
                  onPress={() => context.increase(product._id)}
                >
                  <Text style={styles.plusText}>+</Text>
                </Pressable>
                <Pressable
                  style={styles.removeItem}
                  onPress={() => context.removeFromCart(product._id)}
                >
                  <Text style={styles.removeItemText}>Ürünü Sil</Text>
                </Pressable>
                <Pressable
                  style={styles.minus}
                  onPress={() => context.decrease(product._id)}
                >
                  <Text style={styles.minusText}>-</Text>
                </Pressable>
              </View>
              <Text style={{ textAlign: 'center' }}>
                Toplam: {parseInt(product.price * product.count)} TL
              </Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.textLight}>Sepet boş!</Text>
      )}
    </View>
  );
};

export default CartScreen;
