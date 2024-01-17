// & Imports
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
import EmployeeEdit from './components/EmployeeEdit.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import TeamIndex from './components/TeamIndex.jsx'

// * Actions & Loaders
import { getEmployees, getSingleEmployee, getSingleEditEmployee } from './utils/loaders/employees.js'
import { registerUser, loginUser, deleteEmployee, updateEmployee } from './utils/actions/auth.js'
import { getTeams } from './utils/loaders/teams.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    id: "parent",
    loader: getEmployees,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
      {
        path: '/employees',
        element: <EmployeeIndex />,
        id: "employees",
        loader: getEmployees,
      },
      {
        path: '/employees/:employeeId',
        element: <EmployeeSingle />,
        loader: async ({params }) => getSingleEmployee(params.employeeId)
      },
      {
        path: '/employees/:employeeId/delete',
        action: async ({params }) => deleteEmployee(params.employeeId)
      },
      {
        path: '/employees/:employeeId/edit',
        element: <EmployeeEdit />,
        loader: async ({params }) => getSingleEditEmployee(params.employeeId),
        action: async ({params, request}) => updateEmployee(params.employeeId, request)
      },
      {
        path: '/employees/:employeeId/review',
        // action: async ({ request }) => loginUser(request)
      },
      {
        path: '/teams',
        element: <TeamIndex />,
        loader: getTeams,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
