import React, { Component } from 'react'
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native'
import Main from './application/components/Main'
import styles from './application/styles/styles'

class Listr extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{title: 'Lists', component: Main}}>
      </NavigatorIOS>
    )
  }
}

AppRegistry.registerComponent('Listr', () => Listr);
