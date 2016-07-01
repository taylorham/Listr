import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import ListItem from './ListItem'
import styles from '../styles/styles'

export default class ViewList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      updateFromViewList(this.props.listIdx, nextProps)
    }
  }

  render() {
    const { viewListDataSource, list, listIdx, addItem, toggleCompleted } = this.props

    return (
      <ListView
        dataSource={viewListDataSource}
        renderRow={(item, ignore, itemIdx) =>
          <ListItem item={item} itemIdx={itemIdx} listIdx={listIdx} toggleCompleted={toggleCompleted}/>
        }
        style={styles.listView} />
    )
  }
}
