import { LogMessage } from '../../models'

export function addMessage (context, { message, isError }) {
  console.log(message)
  console.log(isError)
  const sampleLog = new LogMessage(message, isError)
  context.commit('addMessage', sampleLog)
}
