const helpers = {
  generateLists(listNames) {
    lists = []
    listNames.map((object, index) => {
      lists.push({
        id: index,
        name: object.listName,
        color: object.listColor,
        items: [
          {
            name: 'first',
            completed: false,
          },
          {
            name: 'second',
            completed: true
          },
          {
            name: 'third',
            completed: false
          }
        ],
        isLoading: false,
        error: false
      })
    })
    return lists
  }
}

export default helpers
