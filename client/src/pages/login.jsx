import { useState } from 'react'

import axios from 'axios'


import { Link } from 'react-router-dom';

function Register() {
  const [username , serUsername] = useState();
  const [password , setPassword] = useState();

  const [message, setMessage] = useState('');

  const checkUser = async () =>{
    try {
      
      const response = await axios.post('/api/login', {username,password})
      setMessage(response.data.message)

     } catch (error) {
       console.log(error)
     }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    checkUser();
    

    
  }

  return (

    <>
     

      <form onSubmit={handleSubmit}>
      <h2>Login Account</h2>

      {message && <p className='message'>{message}</p>}


      <div className='mb-3'>
      <label htmlFor="username">
      <strong>Username:</strong>
      </label>
      <input type="text" name="username" id="username" autoComplete='off' placeholder='enter your username' className='form-control rounded-0' onChange={(e) => serUsername(e.target.value)} />
    </div>

    <div className='mb-3'>
    <label htmlFor="password">
    <strong>Password:</strong>
    </label>
    <input type="text" name="password" id="password" autoComplete='off' placeholder='enter your password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
  <p>Create New Account <Link to="/">Register</Link></p>

  </form>
  </>
    
  )
}

export default Register
