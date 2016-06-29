import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import ListItem from './ListItem'
import styles from '../styles/styles'

export default class ViewList extends Component {
  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }

  render() {
    const { list, addItem, toggleCompleted } = this.props
    const dataSource = this.dataSource.cloneWithRows(list.items)

    console.log('ViewList', dataSource)

    return (
      <ListView
        dataSource={dataSource}
        renderRow={item =>
          <ListItem item={item} />
        }
        style={styles.listView} />
    )
  }
}
