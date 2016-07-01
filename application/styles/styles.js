import { StyleSheet } from 'react-native'
import { MKColor } from 'react-native-material-kit'

const styles = StyleSheet.create({
  // mainContainer: {
  //   flex: 1,
  //   padding: 30,
  //   marginTop: 65,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   backgroundColor: '#488BEC'
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listView: {
    backgroundColor: '#fff'
  },
  listTitle: {
    alignSelf: 'flex-start',
    color: 'white',
    fontWeight: 'bold'
  },
  listCount: {
    marginTop: -17,
    alignSelf: 'flex-end',
    color: 'white'
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 25,
    paddingLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#b8b8b8'
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
