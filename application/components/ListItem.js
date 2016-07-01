import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles/styles'
import { MKButton, MKColor } from 'react-native-material-kit'

export default class ListItem extends Component {
  render() {
    const { item, listIdx, itemIdx, toggleCompleted } = this.props
    const buttonColor = item.completed ? MKColor.Grey : MKColor.Blue

    const buttonProps = {
      rippleLayerColor: MKColor.Lime,
      onPress: () => toggleCompleted(listIdx, itemIdx)
    }

    return (
      <View>
        <MKButton {...buttonProps} backgroundColor={buttonColor} style={styles.listItem}>
          <Text pointerEvents="none" style={styles.listTitle}>
            {item.name}
          </Text>
        </MKButton>
      </View>
    )
  }
}
