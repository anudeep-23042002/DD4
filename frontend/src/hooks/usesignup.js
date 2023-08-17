
// import { AuthContext } from '../contexts/authcontext'

// export const useSignup = () => {
//   const [error, setError] = React.useState(null)
//   const [isLoading, setIsLoading] = React.useState(null)
//   const { dispatch } = AuthContext()

//   const signup = async (email, password,username) => {
//     setIsLoading(true)
//     setError(null)

//     const response = await fetch('/api/user/signup', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({ email, password,username })
//     })
//     const json = await response.json()

//     if (!response.ok) {
//       setIsLoading(false)
//       setError(json.error)
//     }
//     if (response.ok) {
//       // save the user to local storage
//       localStorage.setItem('user', JSON.stringify(json))

//       // update the auth context
//       dispatch({type: 'LOGIN', payload: json})

//       // update loading state
//       setIsLoading(false)
//     }
//   }

//   return { signup, isLoading, error }
// }
import { useState } from 'react'
import { useAuthContext } from './useauthcontext'
import { useNavigate } from 'react-router-dom';
export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const Navigate=useNavigate();
  const signup = async (email, password,username,role,phone) => {
    setIsLoading(true)
    setError(null)
    const user={email,password,username,role,phone};
    const response = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'}
    })
    
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      console.log("byee")
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
    }
    Navigate('/login')
  }

  return { signup, isLoading, error }
}