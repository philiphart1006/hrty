import axios from 'axios'
import { formToObj } from '../helpers/common.js'
import { redirect } from 'react-router-dom'

export async function registerUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/employees/register/', data, {
    validateStatus: () => true,
  })
}

export async function loginUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/employees/login/', data, {
    validateStatus: () => true,
  })
}

export async function deleteEmployee(id){
  await axios.delete(`/api/employees/${id}/`, {
    validateStatus: () => true,
  })
  return redirect('/employees')
}

export async function updateEmployee(data, id){
  await axios.patch(`/api/employees/${id}/edit/`, data, {
    validateStatus: () => true,
  })
  return redirect(`employees/${id}/`)
}