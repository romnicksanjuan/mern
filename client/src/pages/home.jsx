
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = ()=>{
const navigate = useNavigate();

const [message ,setMessage] = useState();

useEffect(() =>{
    axios.get('https://mern-server-inky.vercel.app/home')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})


return (
    <>
    
    <div>
        <h2>Home Page</h2>
        <button onClick={() =>{navigate('/about')}}>about</button>
    </div>
    </>
)}

export default Home