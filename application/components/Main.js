import React, { Component } from 'react'
import {
  ListView,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native'
import helpers from '../helpers/helpers'
import styles from '../styles/styles'
import ListName from './ListName'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: helpers.generateLists(['Ralphs', 'Farmboy', "Trader Joe's"])
    }

    this.openList = this.openList.bind(this)
  }

  onChangeText() {
    console.log('text changed')
  }

  openList(index) {
    console.log(this.state.lists[index].name)
  }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.state.lists)
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData, index) =>
          <ListName key={index} list={rowData} index={index} openList={this.openList} />
        }
        style={styles.listView} />
    )
  }
}
