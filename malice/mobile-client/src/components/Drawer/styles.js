import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282c34',
    height: '100%',
    padding: 50
  },
  textH1: {
    color: '#bfd1db',
    fontSize: 20,
    fontWeight: '700'
  },
  text: {
    color: '#bfd1db',
    fontSize: 18,
    fontWeight: '700',
    margin: 20
  },
  drawerBtn: {
    borderWidth: 1,
    borderColor: '#ec6b41',
    marginVertical: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4
  },
  icon: {
    marginLeft: 10
  },
  drawerBtnText: {
    color: '#ec6b41',
    textAlign: 'center',
    fontWeight: '700',
    textAlignVertical: 'center',
    marginLeft: 5
  },
  buttons: {
    paddingTop: 30
  }
});

export default styles;
