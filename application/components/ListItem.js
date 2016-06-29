import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from '../styles/styles'
import {
  MKButton,
  MKColor,
  Checkbox
} from 'react-native-material-kit'

export default class ListItem extends Component {
  render() {
    const { item } = this.props
    console.log("ITEM", item.name)

    const buttonProps = {
      backgroundColor: MKColor.Blue,
      rippleLayerColor: MKColor.Lime,
      onPress: () => console.log('ListItem clicked')
    }

    return (
      <View>
        <MKButton {...buttonProps} style={styles.button}>
          <Text pointerEvents="none" style={styles.listTitle}>
            {item.name}
          </Text>
        </MKButton>
      </View>
    )
  }
}
