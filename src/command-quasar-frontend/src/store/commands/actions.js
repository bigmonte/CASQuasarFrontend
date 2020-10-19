import Vue from 'vue'

export async function fetchCommands (context) {
  const commands = await Vue.prototype.$axios.get('/api/commands')
    .then(res => {
      return res.data
    })
  context.commit('updateCommands', commands)
}
