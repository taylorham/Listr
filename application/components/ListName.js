import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'
import {
  MKButton,
  MKColor
} from 'react-native-material-kit'
import styles from '../styles/styles'
import ViewList from './ViewList'

export default class ListName extends Component {
  render() {
    const { list, openList, navigator, addItem, toggleCompleted } = this.props

    const navigatorProps = {
      component: ViewList,
      title: list.name,
      passProps: {
        list: list,
        addItem: addItem,
        toggleCompleted: toggleCompleted
      }
    }

    const buttonProps = {
      backgroundColor: MKColor.BlueGrey,
      rippleLayerColor: MKColor.Lime,
      onPress: () => openList(navigatorProps)
    }

    const countLabel = list.items.length !== 1 ? 'items' : 'item'

    return (
      <View>
        <MKButton {...buttonProps} style={styles.button}>
          <Text pointerEvents="none" style={styles.listTitle}>
            {list.name}
          </Text>
          <Text pointerEvents="none" style={styles.listCount}>
            {`${list.items.length} ${countLabel}`}
          </Text>
        </MKButton>
      </View>
    )
  }
}
