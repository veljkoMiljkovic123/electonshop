import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//clerk
import { ClerkProvider } from "@clerk/clerk-react";

//pages
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

//import your public key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

//Redux
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./store/store.js";
import FavoritePage from "./pages/FavoritePage.jsx";
=======
import { Provider } from 'react-redux'
import store from './store/store.js'
import FavoritePage from './pages/FavoritePage.jsx'
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/singleProduct/:productId",
        element: <SingleProductPage />,
      },
      {
<<<<<<< HEAD
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },
    ],
  },
]);
=======
        path:'/cart',
        element:<CartPage />
      },
      {
        path:'/favorite',
        element:<FavoritePage />
      }
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
