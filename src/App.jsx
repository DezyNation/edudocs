import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './hocs/Navbar'
import Index from './pages/Index'
import {Routes, Route} from 'react-router-dom'
import Courses from './pages/backend/Courses'
import Topics from './pages/backend/Topics'
import Lessons from './pages/backend/Lessons'
import Misc from './pages/backend/Misc'
import Users from './pages/backend/Users'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={ <Index /> }></Route>
        <Route path='/backend/courses' element={<Courses />}/>
        <Route path='/backend/topics' element={<Topics />}/>
        <Route path='/backend/lessons' element={<Lessons />}/>
        <Route path='/backend/storage-and-streaming' element={<Misc />}/>
        <Route path='/backend/users' element={<Users />}/>

      </Routes>
    </>
  )
}

export default App
