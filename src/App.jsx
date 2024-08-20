import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./component/Cart";
import CheckOut from "./component/CheckOut";
import OrderConfirmation from "./component/OrderConfirmation";
import Login from "./component/Login";
import Register from "./component/Register";
import SearchProducts from "./pages/SearchProducts";
import ProductDetails from "./pages/ProductDetails";


function App() {
  const [order, setOrder] = useState(null)
const router = createBrowserRouter([
{
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "about", element: <About/> },
      { path: "shop", element: <Shop/> },
      { path: "contact", element: <Contact/> },
      { path: "cart-items", element: <Cart/> },
      { path: "checkout", element: <CheckOut setOrder={setOrder}/> },
      { path: "/order-confirmation", element: <OrderConfirmation order={order}/> },
      { path: "search-products", element: <SearchProducts/> },
      { path: "product/:id", element: <ProductDetails /> },
      
    ],
  },
  // { path: "login", element: <Login/> },
  // { path: "register", element: <Register/> },
]);

  
  
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
