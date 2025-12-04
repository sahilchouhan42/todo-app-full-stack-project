import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddTask from './components/AddTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<h1>Task List</h1>}/>
        <Route path='/add' element={<AddTask />}/>
      </Routes>
    </>
  )
}

export default App
