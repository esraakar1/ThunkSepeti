import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Restaurant from "./pages/restaurant"
import Cart from "./pages/cart"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useDispatch } from "react-redux"
import { getRestaurants } from "./redux/actions/restActions"
import { getBasket } from "./redux/actions/basketAction"

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getBasket())
  }, []);

  return (
  <BrowserRouter>
  <div className="min-h-screen flex flex-col">
  <Header />
  <div className="flex-1">
   <Routes>
    <Route path="/" element ={ <Home/> } />
    <Route path="/restaurant/:id" element ={ <Restaurant /> } />
    <Route path="/cart" element ={ <Cart /> } />
   </Routes>
   </div>
   <Footer />
   </div>
  </BrowserRouter>
  )
}

export default App