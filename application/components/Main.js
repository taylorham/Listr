import React, { Component } from 'react'
import {
  ListView,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native'
import {
  MKColor
} from 'react-native-material-kit'
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

  openList(props) {
    this.props.navigator.push(props)
  }

  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.state.lists)

    console.log('NameList', dataSource)

    return (
      <ListView
        dataSource={dataSource}
        renderRow={list =>
          <ListName list={list} openList={this.openList} navigator={this.props.navigator}/>
        }
        style={styles.listView} />
    )
  }
}
