// * Packages
import { Form, useActionData, useNavigate} from 'react-router-dom'


// * Styling & Images

// * Default function
export default function Login(){

  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if(res?.status === 201 ){
      setToken(res.data.token)
    }
  }, [res, navigate])

  return(
    <>
    </>
  )
}