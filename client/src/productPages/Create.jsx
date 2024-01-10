import { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom';




function CreateProduct() {
  const [title , setTitle] = useState();
  const [price , setPrice] = useState();
  const [selected , setSelectedFiles] = useState(null);
//   const navigate = useNavigate();
  
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('title', title)
  formData.append('price', price)
  formData.append('file', selected)
  
  axios.post('https://mern-server-khaki.vercel.app/api/create', formData)
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
}

  return (

      <form onSubmit={handleSubmit}>
      <h2>Create</h2>

      <div className='mb-3'>
        <label htmlFor="title">
        <strong>Title:</strong>
        </label>
        <input type="text" name="title" id="title" autoComplete='off' placeholder='enter your title' className='form-control rounded-0' onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className='mb-3'>
        <label htmlFor="title">
        <strong>Image:</strong>
        </label>
        <input type="file" name="file"  className='form-control rounded-0' onChange={(e) => setSelectedFiles(e.target.files[0])}/>
      </div>

      <div className='mb-3'>
        <label htmlFor="price">
        <strong>Price:</strong>
        </label>
        <input type="number" name="price" id="price" autoComplete='off' placeholder='enter your title' className='form-control rounded-0' onChange={(e) => setPrice(e.target.value)}/>
      </div>

  <button type='submit' className='btn btn-success w-100 rounded-0'>Create</button>
  
  </form>
 
    
  )
}

export default CreateProduct
