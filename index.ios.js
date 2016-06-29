import React, { Component } from 'react'
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native'
import { MKColor } from 'react-native-material-kit'
import Main from './application/components/Main'
import styles from './application/styles/styles'

class listr extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        barTintColor={MKColor.Grey}
        tintColor='#000'
        titleTextColor='#000'
        initialRoute={{title: 'Listr', component: Main}}>
      </NavigatorIOS>
    )
  }
}

AppRegistry.registerComponent('listr', () => listr);
