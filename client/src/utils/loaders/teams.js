// & Imports
import axios from 'axios'

export async function getTeams() {
  return await axios.get('/api/teams/', {
    validateStatus: () => true,
  })
}