import Vue from 'vue'

// Commands API

export async function fetchCommands (context) {
  const commands = await Vue.prototype.$axios.get('/api/commands')
    .then(res => {
      return res.data
    })
  context.commit('updateCommands', commands)
}

export async function removeCommand (context, command) {
  await deleteCommandRequest(command.id)
  const index = this.state.commands.commandsData.findIndex(r => r.id === command.id)
  context.commit('removeFromIndex', index)
}

async function deleteCommandRequest (id) {
  Vue.prototype.$axios
    .delete(`/api/commands/${id}`)
    .then(res => res.data)
    .catch((error) => Promise.reject(error))
}

// Search API

export async function fetchSearchData (context) {
  const searchText = this.state.commands.searchText
  const commands = await Vue.prototype.$axios.get(`/api/commands/search/${searchText}`)
    .then(res => { return res.data })
  context.commit('updateSearchData', commands)
}
