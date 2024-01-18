import React from "react";
import { useNavigate } from "react-router-dom";

const About = ()=>{
const navigate = useNavigate();

return (
    <div>
        <h2>About Page</h2>
        <button onClick={() =>{navigate('/home')}}>Home</button>
    </div>

)

}

export default About