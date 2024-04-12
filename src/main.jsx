  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//pages
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import SingleProductPage from './pages/SingleProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:'/',
        element:<HomePage />
      },
      {
        path:'/products',
        element:<ProductsPage />
      },
      {
        path:'/singleProduct/:productId',
        element:<SingleProductPage />
      },
      {
        path:'/cart',
        element:<CartPage />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
