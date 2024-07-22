import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import MyCart from './Pages/MyCart';
import AllProducts from './Pages/AllProducts';
import NewProduct from './Pages/NewProduct';
import ProductDetail from './Pages/ProductDetail';
import DarkModeProvider from './Contexts/DarkModeContext';
import ProtectedRoute from './Pages/ProtectedRoute';
import Wishlist from './Pages/Wishlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      {
        path: '/products/new',
        element:
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
      },
      { path: 'products/:id', element: <ProductDetail /> },
      {
        path: '/cart',
        element:
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
      },
      {
        path: '/products/wishlist/:id', element:
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
