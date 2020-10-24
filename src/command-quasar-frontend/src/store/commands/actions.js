import { apiGetCall, apiDeleteCall, apiPostCall, apiPutCall } from '../shared'

// Commands API

// Fetch commands data
export async function fetchCommands (context) {
  await apiGetCall('commands')
    .then((commands) => {
      context.commit('updateCommands', commands)
      this.dispatch('logger/addMessage', { message: 'Commands fetched from server', isError: false })
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', { message: `fetch commands: ${error.message}`, isError: true })
    })
}

// Remove command from API/DB
export async function removeCommand (context, command) {
  await apiDeleteCall(`commands/${command.id}`)
    .then((cmd) => {
      const index = this.state.commands.commandsData.findIndex(r => r.id === cmd.id)
      context.commit('removeFromIndex', index)
      this.dispatch('logger/addMessage', { message: 'Command removed', isError: false })
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', { message: `remove commands ${error}`, isError: true })
    })
}

// Create command
export async function createCommand (context, command) {
  await apiPostCall('commands', command)
    .then(() => {
      this.dispatch('logger/addMessage', { message: 'Command created', isError: false })
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', { message: `Create command: ${error.message}`, isError: true })
    })
}

// Update command
export async function updateCommand (context, command) {
  await apiPutCall(`commands/${command.id}`, command)
    .then((updatedCommand) => {
      this.dispatch('logger/addMessage', 'Command updated', false)
      context.commit('replaceCommandAtIndex', updatedCommand)
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', { message: `Update command: ${error.message}`, isError: true })
    })
}

// Search API
export async function fetchSearchData (context) {
  const searchText = this.state.commands.searchText
  await apiGetCall(`search/commands/${searchText}`)
    .then((results) => {
      context.commit('updateSearchData', results)
      this.dispatch('logger/addMessage', 'Fetched command search data', false)
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', { message: `Fetch search data: ${error.message}`, isError: true })
    })
}
