// & Imports
import axios from 'axios'

export async function getTeams() {
  return await axios.get('/api/teams/', {
    validateStatus: () => true,
  })
}

export async function getSoftwares() {
  return await axios.get('/api/softwares/', {
    validateStatus: () => true,
  })
}

export async function getHardwares() {
  return await axios.get('/api/hardwares/', {
    validateStatus: () => true,
  })
}

export async function getReviews() {
  const [reviews, employees] = await Promise.all([
    await fetch('/api/reviews/').then((response) => response.json()),
    await fetch(`/api/employees/`).then((response) => response.json())
  ])
  return [reviews, employees]
}

