// Snippets state

export const updateSnippets = (state, toSet) => {
  state.snippetsData = toSet
}

export const removeFromIndex = (state, index) => {
  state.snippetsData.splice(index, 1)
}

export const addCommand = (state, snippetToSet) => {
  state.snippetsData.push(snippetToSet)
}

export const replaceCommandAtIndex = (state, snippetToReplace) => {
  const index = state.snippetsData.findIndex(r => r.id === snippetToReplace.id)
  state.snippetsData[index] = snippetToReplace
}

// Search snippets state

export const updateSearchText = (state, toSet) => {
  state.searchText = toSet
}

export const updateSearching = (state, toSet) => {
  state.searching = toSet
}

export const updateSearchData = (state, toSet) => {
  state.searchData = toSet
}
