// ! Imports
// * Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// * Styling
import './assets/styles/index.scss'

// * Components
import Home from './components/Home.jsx'
import EmployeeSingle from './components/EmployeeSingle.jsx'
import EmployeeIndex from './components/EmployeeIndex.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />,
        // action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        // action: async ({ request }) => loginUser(request)
      },
      {
        path: '/employees',
        element: <EmployeeIndex />,
        // loader: async ({ request }) => loginUser(request)
      },
      {
        path: '/employees/:employeeId',
        element: <EmployeeSingle />,
        action: async ({ request }) => loginUser(request)
      },
      {
        path: '/employees/:employeeId/edit',
        // element: <EmployeeEdit />,
        // action: async ({ request }) => loginUser(request)
      },
      {
        path: '/employees/:employeeId/review',
        // action: async ({ request }) => loginUser(request)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
