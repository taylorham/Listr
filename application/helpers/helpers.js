const helpers = {
  generateLists(listNames) {
    lists = []
    listNames.map((name, index) => {
      lists.push({
        id: index,
        name: name,
        items: [],
        isLoading: false,
        error: false
      })
    })
    return lists
  }
}

export default helpers
