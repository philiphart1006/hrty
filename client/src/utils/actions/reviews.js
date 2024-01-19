import axios from 'axios'
import { formToObj } from '../helpers/common.js'
import { getToken } from '../helpers/common.js'
import { redirect } from 'react-router-dom'

// & Create Review

export async function createReview(request) {
  console.log('Create review route hit')
  console.log(request)
  const data = await formToObj(request)
  console.log('Data before: ', data)
  return await axios.post('/api/reviews/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}