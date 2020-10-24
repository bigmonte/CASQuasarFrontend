import { apiGetCall, apiDeleteCall, apiPostCall, apiPutCall } from '../shared'

// Commands API

// can fetch commands
// temporary workaround to "economize API calls"

// Fetch commands data
export async function fetchCommands (context) {
  const commands = await apiGetCall('commands')
  console.log('[+] commands fetched')
  context.commit('updateCommands', commands)
}

// Remove command from API/DB
export async function removeCommand (context, command) {
  const delCmd = await apiDeleteCall(`commands/${command.id}`)
  const index = this.state.commands.commandsData.findIndex(r => r.id === delCmd.id)
  context.commit('removeFromIndex', index)
}

// Create command
export async function createCommand (context, command) {
  return await apiPostCall('commands', command)
}

// Update command
export async function updateCommand (context, command) {
  const updatedCommand = await apiPutCall(`commands/${command.id}`, command)
  if (updatedCommand) {
    context.commit('replaceCommandAtIndex', updatedCommand)
  }
  return updatedCommand
}

// Search API

export async function fetchSearchData (context) {
  const searchText = this.state.commands.searchText
  const commands = await apiGetCall(`search/commands/${searchText}`)
  context.commit('updateSearchData', commands)
}
