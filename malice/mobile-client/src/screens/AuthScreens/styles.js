import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282c34'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ec6b41',
    textAlign: 'center',
    paddingTop: 10
  },
  header2: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ec6b41',
    paddingTop: 10
  },
  emailInput: {
    marginLeft: 10,
    width: 150,
    color: '#bfd1db'
  },
  passwordInput: {
    marginLeft: 10,
    width: 150,
    color: '#bfd1db'
  },
  formDesign: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ec6b41'
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain'
  },

  buttonLogin: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#282c34',
    borderColor: '#ec6b41',
    borderWidth: 2,
    margin: 5,
    color: '#ec6b41'
  },
  buttonRegister: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ec6b41',
    margin: 5
  },
  pressableTextLogin: {
    color: '#ec6b41',
    fontWeight: '700'
  },
  pressableTextRegister: {
    color: '#282c34',
    fontWeight: '700'
  }
});

export default styles;
