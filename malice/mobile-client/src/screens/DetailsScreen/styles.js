import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282c34',
    height: '100%'
  },
  button: {
    paddingVertical: 15,
    marginVertical: 20,
    marginHorizontal: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ec6b41'
  },
  basketText: {
    color: '#ec6b41',
    fontWeight: '700',
    textAlign: 'center'
  },
  text: {
    color: '#bfd1db',
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center'
  },
  price: {
    fontWeight: '700',
    fontSize: 18,
    color: '#bfd1db',
    textAlign: 'center'
  },
  priceInner: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    color: '#bfd1db',
    fontSize: 16,
    margin: 10
  }
});

export default styles;
