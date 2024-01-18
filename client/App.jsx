import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './src/pages/home';
import About from './src/pages/about';
import Register from './src/pages/register';
import Display from './src/pages/display';
import Login from './src/pages/login';
import ProductList from './src/productPages/productList';
import CreateProduct from './src/productPages/Create';
// import style from './src/css/register.module.css';
// import { Link } from 'react-router-dom';

function App() {

  return (
    
    <>
    
     <div>
     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/login' element={<Login/>}></Route>


        <Route path='/product-list' element={<ProductList/>}></Route>
        <Route path='/create' element={<CreateProduct/>}></Route>

        
      </Routes>
      </BrowserRouter>
     </div>
</>   
  )
}
export default App
