import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native'
import Main from './application/components/Main'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  }
})

class listr extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Listr',
          component: Main
        }} />
    )
  }
}

AppRegistry.registerComponent('listr', () => listr);
