import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ShipDetails from './ShipDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: 'details/:id',
    element: <ShipDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
