import { apiGetCall, apiDeleteCall, apiPostCall, apiPutCall } from '../shared'

// Commands API

// Todo get rid of try catch block

// Fetch commands data
export async function fetchCommands (context) {
  try {
    const commands = await apiGetCall('commands')
    console.log('[+] commands fetched')
    context.commit('updateCommands', commands)
    this.dispatch('logger/addMessage', 'Commands fetched from server', false)
  } catch (error) {
    this.dispatch('logger/addMessage', `fetch commands: ${error.message}`, true)
  }
}

// Remove command from API/DB
export async function removeCommand (context, command) {
  try {
    const delCmd = await apiDeleteCall(`commands/${command.id}`)
    const index = this.state.commands.commandsData.findIndex(r => r.id === delCmd.id)
    context.commit('removeFromIndex', index)
    this.dispatch('logger/addMessage', 'Command removed', false)
  } catch (error) {
    this.dispatch('logger/addMessage', `remove commands ${error.message}`, true)
  }
}

// Create command
export async function createCommand (context, command) {
  try {
    this.dispatch('logger/addMessage', 'Command created', false)
    return await apiPostCall('commands', command)
    // Todo add to array and avoid another call
  } catch (error) {
    this.dispatch('logger/addMessage', `Create command: ${error.message}`, true)
  }
}

// Update command
export async function updateCommand (context, command) {
  try {
    const updatedCommand = await apiPutCall(`commands/${command.id}`, command)
    if (updatedCommand) {
      context.commit('replaceCommandAtIndex', updatedCommand)
    }
    this.dispatch('logger/addMessage', 'Command updated', false)
    return updatedCommand
  } catch (error) {
    this.dispatch('logger/addMessage', `Update command: ${error.message}`, true)
  }
}

// Search API

export async function fetchSearchData (context) {
  try {
    const searchText = this.state.commands.searchText
    const commands = await apiGetCall(`search/commands/${searchText}`)
    context.commit('updateSearchData', commands)
    this.dispatch('logger/addMessage', 'Fetched command search data', false)
  } catch (error) {
    this.dispatch('logger/addMessage', `Fetch search data: ${error.message}`, true)
  }
}
