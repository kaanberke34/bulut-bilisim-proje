import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginBottom: 37,
    height: '100%',
    backgroundColor: '#282c34'
  },
  drawerBtn: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center'
  },
  drawerText: {
    color: '#ec6b41',
    fontWeight: '700',
    textAlignVertical: 'center',
    marginLeft: 5,
    fontSize: 20
  },
  search: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center'
  },
  searchInput: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ec6b41',
    borderRadius: 10,
    color: '#bfd1db',
    padding: 10
  }
});
export default styles;
