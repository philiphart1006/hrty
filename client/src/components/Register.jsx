// * Packages
import { useEffect } from "react"
import { Form, useActionData, useNavigate } from "react-router-dom"


// * Styling & Images

// * Default function
export default function Register(){

  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    res?.status === 201 && navigate('/login')
  }, [res, navigate])

  return(
    <>
      <Form method="POST" className="register">
        <div>
          <label form='email'></label>
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div>
          <label form='username'></label>
          <input type='text' name='username' placeholder='Username' />
        </div>
        <div>
          <label form='password'></label>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <div>
          <label form='password confirmation'></label>
          <input type='password' name='password_confirmation' placeholder='Please confirm password' />
        </div>
        <button>Register</button>
      </Form>
    </>
  )
}