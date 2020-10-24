
export function addMessage (context, message, isError) {
  const sampleLog = { message: message, isError: isError }
  const rId = Math.random().toString(36).substr(2, 7)
  sampleLog.id = rId
  context.commit('addMessage', sampleLog)
}
