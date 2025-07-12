import { useState } from 'react'
import Auth from './Components/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Auth/>}/>
        <Route path='/Products' element = {<Products/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
