import { apiGetCall, apiDeleteCall, apiPostCall, apiPutCall } from '../shared'

// Snippets API

// Fetch snippets data
export async function fetchSnippets (context) {
  const snippets = await apiGetCall('snippets')
  context.commit('updateSnippets', snippets)
}

// Remove snippet from API/DB
export async function removeSnippet (context, snippet) {
  const delCmd = await apiDeleteCall(`snippets/${snippet.id}`)
  const index = this.state.snippets.snippetsData.findIndex(r => r.id === delCmd.id)
  context.commit('removeFromIndex', index)
}

// Create snippet
export async function createSnippet (context, snippet) {
  return await apiPostCall('snippets', snippet)
}

// Update snippet
export async function updateSnippet (context, snippet) {
  const updatedSnippet = await apiPutCall(`snippets/${snippet.id}`, snippet)
  if (updatedSnippet) {
    context.commit('replaceSnippetAtIndex', updatedSnippet)
  }
  return updatedSnippet
}

// Search API

export async function fetchSearchData (context) {
  const searchText = this.state.snippets.searchText
  const snippets = await apiGetCall(`snippets/search/${searchText}`)
  context.commit('updateSearchData', snippets)
}
