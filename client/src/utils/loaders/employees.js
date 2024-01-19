// & Imports
import axios from 'axios'

// & Functions
export async function getEmployees(){
  const res = await fetch('/api/employees/')
  return res.json()
}

export async function getSingleEmployee(id){
  const res = await fetch(`/api/employees/${id}/`)
  return res.json()
}

export async function getSingleEditEmployee(id){
  const [employees, teams,softwares ] = await Promise.all([
    await fetch(`/api/employees/${id}/`).then((response) => response.json()),
    await fetch('/api/teams/').then((response) => response.json()),
    await fetch('/api/softwares/').then((response) => response.json())
  ])
  return [employees,teams,softwares]
}
