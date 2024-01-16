// & Imports
import axios from 'axios'

// & Functions
export async function getEmployees(){
  const res = await fetch('/api/employees')
  return res.json()
}

export async function getSingleEmployee(id){
  const res = await fetch(`/api/employees/${id}`)
  return res.json()
}

