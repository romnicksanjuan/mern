import { useState } from 'react'
import axios from 'axios'
import style from "../css/register.module.css"
import { Link } from 'react-router-dom';

function Register() {
  const [name , setName] = useState();
  const [username , serUsername] = useState();
  const [password , setPassword] = useState();

  const [message, setMessage] = useState('');

  const checkUser = async () =>{
    try {
      const response = await axios.post('https://mern-server-khaki.vercel.app/', {name,username,password})

      if(response.data.userExists){
       setMessage('username already exist')
      }else{
       setMessage('register successfully')
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
      <h2 className={style.title}>Register</h2>

      {message && <p className={style.message}>{message}</p>}

      <div className='mb-3'>
        <label htmlFor="name">
        <strong>Name:</strong>
        </label>
        <input type="text" name="name" id="name" autoComplete='off' placeholder='enter your name' className='form-control rounded-0' onChange={(e) => setName(e.target.value)}/>
      </div>

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

  <button type='submit' className={style.register}>Register</button>
  <p>Already have an account? <Link to="/api/login">Login</Link></p>

  </form>
  </div>
  </>
    
  )
}

export default Register
