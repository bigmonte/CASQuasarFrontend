import axios from 'axios'

export function fetchCommands () {
  return axios.get('/api/commands')
    .then(res => {
      return res.data
    })
}
