import { useState } from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import './App.css'
import AdminHeader from './AdminHeader'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
        <AdminHeader />
        <Dashboard/>
    </>
  )
}

export default App
