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

export const commandsWithPlatform = (state) => (platform) => {
  return state.commandsData.filter(c => c.platform === platform)
}

export const getCommandWithId = (state) => (id) => {
  var result = state.commandsData.filter(c => c.id === id)
  return result.length > 0 ? result[0] : null
}
