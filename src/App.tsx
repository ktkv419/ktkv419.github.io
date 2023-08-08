import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Nav from './components/Nav/Nav'

window.navigator.vibrate(10000)
navigator.vibrate(10000)

function App() {
  return (
    <div className="app">
      <Outlet />
      <Nav />
    </div>
  )
}

export default App
