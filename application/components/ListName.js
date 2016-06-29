import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'
import styles from '../styles/styles'

export default class ListName extends Component {
  render() {
    const { list, index, openList } = this.props
    let TouchableElement = Platform.OS === 'android' ? TouchableElement = TouchableNativeFeedback : TouchableElement = TouchableHighlight

    console.log(list, index, openList)
    console.log(list.name)

    return (
      <View>
        <TouchableElement
          style={styles.button}
          onPress={() => openList(index)}>
            <View>
              <Text style={styles.listTitle}>
                {list.name}
              </Text>
              <Text style={styles.listCount}>
                {list.items.length}
              </Text>
            </View>
        </TouchableElement>
      </View>
    )
  }
}
