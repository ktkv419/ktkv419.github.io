import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

export const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.expand()
  }, [])
  return <Outlet />
}

export default App
