import axios from 'axios'

export function updateCommandRequest (id, command) {
  return axios
    .put(`/api/commands/${id}`, command)
    .then(res => { return res.data })
    .catch((error) => Promise.reject(error))
}

export function searchCommands (searchTitle) {
  return axios.get(`/api/commands/search/${searchTitle}`)
    .then(res => { return res.data })
}
