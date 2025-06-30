import React from 'react'
import axios from 'axios'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Categories from './pages/categories/categories'
import Products from './pages/products/products'
import Info from './pages/info/info'
import Layout from './pages/Layout/layout'
import Main from './pages/main/main'

const App = () => {
  let router = createBrowserRouter ([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {

          path: '/',
          element: <Main/>
        },
        {
          path: '/categories',
          element: <Categories/>
        },
        {
          path: '/products',
          element: <Products/>
        },
        {
          path: '/info/:id',
          element: <Info/>
        }

      ]
    }

  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App