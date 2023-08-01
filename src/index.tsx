import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Tutorial from './layout/Tutorial/Tutorial'
import './index.scss'
import Debug from './layout/Debug'
import Menu from './layout/Menu/Menu'

export const tg = window.Telegram.WebApp

tg.expand()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/tutorial',
    element: <Tutorial />,
  },
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/debug',
    element: <Debug />,
  },
])

root.render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
