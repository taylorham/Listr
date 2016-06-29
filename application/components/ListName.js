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

export default class ListName extends Component {
  render() {
    const { list, index, openList } = this.props
    let TouchableElement = Platform.OS === 'android' ? TouchableElement = TouchableNativeFeedback : TouchableElement = TouchableHighlight

    console.log(list, index, openList)
    console.log(list.name)

    const coloredButtonProps = {
      backgroundColor: MKColor.BlueGrey,
      rippleLayerColor: MKColor.Lime,
      onPress: () => console.log('button clicked')
    }

    const buttonTextProps = {
      pointerEvents: 'none'
    }

    let countLabel = list.items.length !== 1 ? 'items' : 'item'

    return (
      <View>
        <MKButton {...coloredButtonProps} style={styles.button}>
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
