import { useState } from 'react'

import axios from 'axios'
import style from '../css/login.module.css'
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';

function Register() {
  const [username , serUsername] = useState();
  const [password , setPassword] = useState();

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const checkUser = async () =>{
    try {
      
      const response = await axios.post('https://mern-server-inky.vercel.app//login', {username,password})

      if(response.data.message === 'user not found'){
        setMessage(response.data.message)
      }

      if(response.data.message === 'success'){
        navigate('/')
        setMessage(response.data.message)
      }

      if(response.data.message === 'password incorrect'){
        setMessage(response.data.message)
      }
      

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
     <div className={style.container}>

      <form onSubmit={handleSubmit}>
      <h2 className={style.title}>Login Account</h2>

      {message && <p className={style.message}>{message}</p>}


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

  <button type='submit' className={style.login}>Login</button>
  <p>Create New Account <Link to="/">Register</Link></p>

  </form>
  </div>
  </>
    
  )
}

export default Register
