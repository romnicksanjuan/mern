
import { useNavigate } from "react-router-dom";

const Home = ()=>{
const navigate = useNavigate();

return (
    <>
    
    <div>
        <h2>Home Page</h2>
        <button onClick={() =>{navigate('/api/about')}}>about</button>
    </div>
    </>
)}

export default Home