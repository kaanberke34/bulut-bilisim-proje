import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  },
  cartItem: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 40
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  emptyCart: {
    margin: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ec6b41',
    borderRadius: 4
  },
  text: {
    color: '#ec6b41',
    textAlign: 'center'
  },
  textLight: {
    color: '#bfd1db',
    fontSize: 16,
    textAlign: 'center'
  },
  image: {
    height: 150,
    resizeMode: 'contain',
    margin: 5
  },
  plus: {
    marginLeft: 10,
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 4,
    backgroundColor: '#ec6b41'
  },
  plusText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  minus: {
    marginLeft: 10,
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ec6b41'
  },
  minusText: {
    color: '#ec6b41',
    fontWeight: 'bold'
  },
  removeItem: {
    marginLeft: 10,
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ec6b41'
  },
  removeItemText: {
    color: '#ec6b41'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});

export default styles;
