// * Packages
import { Form, useActionData, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import { setToken } from '../utils/helpers/common'


// * Styling & Images

// * Default function
export default function Login(){

  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if(res?.status === 200 ){
      setToken(res.data.access)
      localStorage.setItem('hrty-username',res.data.username)
      localStorage.setItem('hrty-team',res.data.team)
      localStorage.setItem('hrty-id',res.data.id)
      localStorage.setItem('hrty-image',res.data.image)
      navigate('/')
    }
  }, [res, navigate])

  return(
    <>
      <Form method='POST'>
        <label form='username'>Username</label>
        <input type='text' id='username' name='username' placeholder='username'/>
        <label form='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='password'/>
        <button type='submit'>Login</button>
      </Form>
    </>
  )
}