import { useState } from 'react'
import './App.css'
import Home from './Routing/Home'
import RootLayout from './IsteWork/RootLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './IsteWork/About'
import Contact from './IsteWork/Contact'
import Products from './IsteWork/Products'
import RouteError from './Routing/RouteError'
import Register from './Routing/Register'
import Cart from './IsteWork/Cart'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <RouteError />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "register",
          element: <Register />
        },
        {
          path: "cart",
          element: <Cart />
        }
      ]
    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={routerObj} />
      </div>
    </>
  )
}

export default App
