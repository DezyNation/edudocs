import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './hocs/Navbar'
import Index from './pages/Index'
import {Routes, Route} from 'react-router-dom'
import Courses from './pages/Courses'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={ <Index /> }></Route>
        <Route path='/backend/courses' element={<Courses />}/>
      </Routes>
    </>
  )
}

export default App
