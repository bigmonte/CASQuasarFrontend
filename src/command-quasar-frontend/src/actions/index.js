import axios from 'axios'

export function fetchCommands () {
  return axios.get('/api/commands')
    .then(res => {
      return res.data
    })
}
export function updateCommandRequest (id, command) {
  return axios
    .put(`/api/commands/${id}`, command)
    .then(res => { return res.data })
    .catch((error) => Promise.reject(error))
}

export function createCommandRequest (command) {
  return axios
    .post('/api/commands', command)
    .then(res => res.data)
    .catch((error) => Promise.reject(error))
}

export function deleteCommandRequest (id) {
  return axios
    .delete(`/api/commands/${id}`)
    .then(res => res.data)
    .catch((error) => Promise.reject(error))
}
