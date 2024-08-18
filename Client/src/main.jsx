import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Task1 } from './components/Task1'
import { Task2 } from './components/Task2'
import { Task3 } from "./components/Task3"
import { Task4 } from './components/Task4'

const router = createBrowserRouter([
  {
    path: "/task1",
    element: <Task1/>,
  },
  {
    path: "/task2",
    element: <Task2/>,
  },
  {
    path: "/task3",
    element: <Task3/>,
  },
  {
    path: "/task4",
    element: <Task4/>,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
