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
