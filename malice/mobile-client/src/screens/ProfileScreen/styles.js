import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282c34',
    padding: 30,
    paddingTop: 50
  },
  blockContainer1: {
    marginBottom: 25
  },
  blockContainer2: {
    marginBottom: 25
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#bfd1db'
  },
  textInner: {
    fontSize: 20,
    fontWeight: '700',
    color: '#bfd1db'
  },
  menuBtn: {
    flexDirection: 'row',
    paddingLeft: -10,
    alignItems: 'center',
    marginBottom: 30
  },
  menuText: {
    color: '#ec6b41',
    fontWeight: '700',
    textAlignVertical: 'center',
    marginLeft: 5,
    fontSize: 20
  },
  changeInfo: {
    color: '#bfd1db',
    margin: 10
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ec6b41',
    color: '#bfd1db',
    padding: 10,
    marginTop: 10
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  row: {
    flexDirection: 'row',
    margin: 20
  },
  iconCenter: {
    textAlignVertical: 'center'
  },
  borderButtonsLight: {
    borderWidth: 1,
    borderColor: '#ec6b41',
    backgroundColor: '#ec6b41',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 4
  },
  buttonTextLight: {
    fontSize: 18,
    fontWeight: '700',
    color: '#282c34',
    textAlign: 'center'
  },
  borderButtonsDark: {
    borderWidth: 1,
    borderColor: '#ec6b41',
    backgroundColor: '#282c34',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 4
  },
  buttonTextDark: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ec6b41',
    textAlign: 'center'
  }
});

export default styles;
