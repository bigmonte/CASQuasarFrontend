/*
export function someMutation (state) {
}
*/

export const updateExample = (state, toSet) => {
  state.example = toSet
}

export const updateCommands = (state, toSet) => {
  state.commandsData = toSet
}

export const removeFromIndex = (state, index) => {
  state.commandsData.splice(index, 1)
}

export const addCommand = (state, commandToSet) => {
  state.commandsData.push(commandToSet)
}
