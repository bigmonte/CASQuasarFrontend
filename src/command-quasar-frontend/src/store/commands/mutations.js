// Commands state

export const updateCommands = (state, toSet) => {
  state.commandsData = toSet
}

export const removeFromIndex = (state, index) => {
  state.commandsData.splice(index, 1)
}

export const addCommand = (state, commandToSet) => {
  state.commandsData.push(commandToSet)
}

// Search commands state

export const updateSearchText = (state, toSet) => {
  state.searchText = toSet
}

export const updateSearching = (state, toSet) => {
  state.searching = toSet
}

export const updateSearchData = (state, toSet) => {
  state.searchData = toSet
}
