import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Users from './pages/Users.tsx'
import Login from './pages/Login.tsx'
import {QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/Login',
    element:<Login/>
  },
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/Users',
        element: <Users/>
      }
    ]
  }
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
   <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
