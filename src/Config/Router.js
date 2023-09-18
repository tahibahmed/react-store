
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../Components/About';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';

import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Products from '../Components/Products';


const Router = () => {
  return (
    <BrowserRouter>
<Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default Router