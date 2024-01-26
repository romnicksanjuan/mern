import { useState } from 'react'
import axios from 'axios'
import style from "../css/register.module.css"
import { Link } from 'react-router-dom';

function Register() {
  const [name , setName] = useState();
  const [username , setUsername] = useState();
  const [password , setPassword] = useState();

  const [message,setMessage] = useState();


  const checkUser = async () =>{
    try {
      const response = await axios.post('https://mern-server-inky.vercel.app//', {name,username,password})
     

      if(response.status === 200){
        setMessage(response.data.message)
        console.log(response.data.message)
      }

      if(response.status === 400){
        setMessage(response.data.message)
        console.log(response.data.message)
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

      {
        message && <p className={style.message}>{message}</p>
      }

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
      <input type="text" name="username" id="username" autoComplete='off' placeholder='enter your username' className='form-control rounded-0' onChange={(e) => setUsername(e.target.value)} />
    </div>

    <div className='mb-3'>
    <label htmlFor="password">
    <strong>Password:</strong>
    </label>
    <input type="text" name="password" id="password" autoComplete='off' placeholder='enter your password' className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button type='submit' className={style.register}>Register</button>
  <p>Already have an account? <Link to="/login">Login</Link></p>

  </form>
  </div>
  </>
    
  )
}

export default Register
