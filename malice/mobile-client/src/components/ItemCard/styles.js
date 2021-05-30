import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    margin: 5
  },
  right: {
    padding: 10,
    flex: 3
  },
  title: {
    fontSize: 15,
    margin: 5
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20
  }
});

export default styles;
