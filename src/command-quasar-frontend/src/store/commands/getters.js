/*
export function someGetter (state) {
}
*/

export const getLength = (state) => {
  return state.commandsData.length
}

export const canSearch = (state) => {
  return (state.searchText.trim().length || state.searchText)
}
