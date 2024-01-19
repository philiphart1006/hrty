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
  const token  = getToken()
  console.log('Token: ',token)
  axios.post('/api/reviews/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
      // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2Mjc2MzAwLCJpYXQiOjE3MDU2NzE1MDAsImp0aSI6Ijk0N2NhM2VkOTM4NTQ1Mjc5ZjU0YmJkNWM2OGQ5MGExIiwidXNlcl9pZCI6M30.tIaxtiRK6ed-2c_57fEu9FFkQf_PNG2o2K_tX1LLYEs`
    }
  })
  axios.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
  })
  return
}