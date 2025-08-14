import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root/Root.jsx';
import { AuthProvider } from './Provider/AuthProvider.jsx';
import DashboardLayout from './root/DashboardLayout.jsx'
import Found from './Pages/Found.jsx'
import Lost from './Pages/Lost.jsx'
import Cliemd from './Pages/Cliemd.jsx'
import Private from './Private/Private.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: '/', element: <App></App> }
    ]
  },
  {
    path:'/dashboard',element:<Private><DashboardLayout></DashboardLayout></Private>,
    children:[
      {
        path:'/dashboard/found',
        element:<Found></Found>
      },
      {
        path:'/dashboard/lost',
        element:<Lost></Lost>
      },
      {
        path:'/dashboard/claimed',
        element:<Cliemd></Cliemd>
      }
    ]
  }
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
