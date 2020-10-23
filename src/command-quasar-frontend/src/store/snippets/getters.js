export const canSearch = (state) => {
  return (state.searchText.trim().length || state.searchText)
}
