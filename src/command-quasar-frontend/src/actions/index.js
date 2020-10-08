import axios from 'axios'

export function fetchCommands () {
  return axios.get('/api/commands')
    .then(res => {
      return res.data
    })
}
export function updateCommand (id, command) {
  return axios
    .put(`/api/commands/${id}`, command)
    .then(res => { return res.data })
    .catch((error) => Promise.reject(error))
}
