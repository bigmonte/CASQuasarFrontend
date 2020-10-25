import { apiGetCall, apiDeleteCall, apiPostCall, apiPutCall } from '../shared'
import { LogMessage } from '../../models'
// Commands API

// Fetch commands data
export async function fetchCommands (context) {
  await apiGetCall('commands')
    .then((commands) => {
      context.commit('updateCommands', commands)
      this.dispatch('logger/addMessage', new LogMessage('Commands fetched from server', false))
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', new LogMessage(`fetch commands: ${error.message}`, true))
    })
}

// Fetch commands with platform

export async function fetchCommandsWithPlatform (context, platform) {
  /* await apiGetCall(`commands/platform/${platform}`)
    .then((commands) => {
      context.commit('updateCommandsToShwo', commands)
      this.dispatch('logger/addMessage', new LogMessage('Commands fetched from server', false))
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', new LogMessage(`fetch commands: ${error.message}`, true))
    }) */
  const filteredCommands = []
  for (var i = 0; i < this.state.commands.commandsData.length; i++) {
    var cmd = this.state.commands.commandsData[i]
    if (cmd.platform === platform) filteredCommands.push(cmd)
  }
  context.commit('updateCommandsToShow', filteredCommands)
}

// Remove command from API/DB
export async function removeCommand (context, command) {
  await apiDeleteCall(`commands/${command.id}`)
    .then((cmd) => {
      const index = this.state.commands.commandsData.findIndex(r => r.id === cmd.id)
      context.commit('removeFromIndex', index)
      this.dispatch('logger/addMessage', new LogMessage('Command removed', false))
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', new LogMessage(`remove commands ${error}`, true))
    })
}

// Create command
export async function createCommand (context, command) {
  await apiPostCall('commands', command)
    .then((cmd) => {
      this.dispatch('logger/addMessage', new LogMessage('Command created', false))
      return cmd
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', new LogMessage(`Create command: ${error.message}`, true))
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
      this.dispatch('logger/addMessage', new LogMessage(`Update command: ${error.message}`, true))
    })
}

// Search API
export async function fetchSearchData (context) {
  const searchText = this.state.commands.searchText
  await apiGetCall(`search/commands/${searchText}`)
    .then((results) => {
      context.commit('updateSearchData', results)
      this.dispatch('logger/addMessage', new LogMessage('Fetched command search data', false))
    })
    .catch((error) => {
      this.dispatch('logger/addMessage', new LogMessage(`Fetch search data: ${error.message}`, true))
    })
}
