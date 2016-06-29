import { StyleSheet } from 'react-native'
import { MKColor } from 'react-native-material-kit'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#488BEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  listView: {
    backgroundColor: MKColor.LightBlue
  },
  listTitle: {
    alignSelf: 'flex-start',
    color: 'white',
    fontWeight: 'bold'
  },
  listCount: {
    marginTop: -15,
    alignSelf: 'flex-end',
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 15,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: MKColor.Grey
  },
  // button: {
  //   height: 45,
  //   flexDirection: 'row',
  //   backgroundColor: 'white',
  //   borderColor: 'white',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   marginBottom: 10,
  //   marginTop: 10,
  //   alignSelf: 'stretch',
  //   justifyContent: 'center'
  // }
})

export default styles
