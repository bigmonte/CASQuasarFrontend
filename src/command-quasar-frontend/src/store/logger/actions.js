import { LogMessage } from '../../models'

export function addMessage (context, message, isError) {
  const sampleLog = new LogMessage(message, isError)
  context.commit('addMessage', sampleLog)
}
