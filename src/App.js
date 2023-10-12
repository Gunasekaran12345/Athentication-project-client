import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/Home';

function App() {
  return (

   <Routes>
         <Route path='/' element={ <Login />}></Route>
         <Route path='/Register' element={<Register />}></Route>
         <Route path='/Home' element={<Home />}></Route>
   </Routes>
  )
}

export default App;
