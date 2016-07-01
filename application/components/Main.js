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
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.completed !== r2.completed
    })
    const _lists = helpers.generateLists([
      {listName: 'Ralphs', listColor: '#e6412d'},
      {listName: 'Farmboy', listColor: '#ea5929'},
      {listName: "Trader Joe's", listColor: '#5b8d8a'}
    ])

    this.state = {
      lists: _lists,
      viewListDS: _lists[0].items,
      viewListDataSource: this.dataSource.cloneWithRows(_lists[0].items)
    }

    this.openList = this.openList.bind(this)
    this.updateLists = this.updateLists.bind(this)
    this.updateFromViewList = this.updateFromViewList.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  addListButton() {

  }

  addListItemButton() {

  }

  onChangeText() {

  }

  addList() {

  }

  updateLists(listIdx, changer = updatedLists => updatedLists, callback = () => {}, updateListsState = false) {
    const updatedLists = this.state.lists.slice()
    const listUpdater = changer(updatedLists)

    updateListsState
      ? this.setState({
          lists: listUpdater,
          viewListDataSource: this.state.viewListDataSource.cloneWithRows(listUpdater[listIdx].items)
        }, callback())
      : this.setState({
          viewListDataSource: this.state.viewListDataSource.cloneWithRows(listUpdater[listIdx].items)
        }, callback())
  }

  updateFromViewList(listIdx, nextProps) {
    this.setState({
      lists: {[listIdx]: nextProps.list},
      viewListDataSource: this.state.viewListDataSource.cloneWithRows(nextProps.list)
    })
  }

  toggleCompleted(listIdx, itemIdx) {
    const toggleCompletion = (updatedLists) => {
      updatedLists[listIdx].items[itemIdx].completed = !updatedLists[listIdx].items[itemIdx].completed
      return updatedLists
    }

    this.updateLists(listIdx, toggleCompletion, console.log('toggleCompleted'))
  }

  addListItem(listIdx, item) {
    const addItem = (updatedLists) => {
      updatedLists[listIdx].items.push({name: item, completed: false})
      return updatedLists
    }

    this.updateLists(listIdx, addItem)
  }

  openList(props) {
    this.updateLists(props.passProps.listIdx)

    this.props.navigator.push(props)
  }

  render() {
    const dataSource = this.dataSource.cloneWithRows(this.state.lists)

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(list, ignore, listIdx) =>
          <ListName
            updateLists={this.updateLists}
            viewListDataSource={this.state.viewListDataSource}
            reloadViewListData={this.reloadViewListData}
            list={list}
            listIdx={listIdx}
            openList={this.openList}
            navigator={this.props.navigator}
            toggleCompleted={this.toggleCompleted} />
        }
        style={styles.listView} />
    )
  }
}
