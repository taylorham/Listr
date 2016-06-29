const helpers = {
  generateLists(listNames) {
    lists = []
    listNames.map((name, index) => {
      lists.push({
        id: index,
        name: name,
        items: [
          {
            name: 'zeroth',
            completed: false,
          },
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
          },
          {
            name: 'FUCK',
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
