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
    const { list, listIdx, updateFromViewList, viewListDataSource, openList, navigator, addItem, toggleCompleted } = this.props

    const goToViewList = {
      component: ViewList,
      title: list.name,
      passProps: {
        updateFromViewList: updateFromViewList,
        viewListDataSource: viewListDataSource,
        listIdx: listIdx,
        list: list,
        addItem: addItem,
        toggleCompleted: toggleCompleted
      }
    }

    const buttonProps = {
      backgroundColor: list.color || '#999',
      rippleLayerColor: MKColor.Yellow,
      onPress: () => openList(goToViewList)
    }

    const countLabel = list.items.length !== 1 ? 'items' : 'item'

    return (
      <View>
        <MKButton {...buttonProps} style={styles.listItem}>
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
