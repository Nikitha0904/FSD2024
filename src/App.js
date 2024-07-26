import { BrowserRouter, Route, Routes } from "react-router-dom"

import Assign from "./assign"
import Product from "./Product"

import Home from "./Home"
import { createContext, useState } from "react";
import Profile from "./Profile";
import Cart from "./Cart";
export const GlobalContext = createContext(); // create context



function App() {
  const [globalCount, setGlobalCount] = useState(0);
  const [globalUserObj, setGlobalUserObj] = useState({});
  const [globalIsLogin, setGlobalIsLogin] = useState(false);
  const [globalIsRegiter, setGlobalIsRegister] = useState(false);
  const [globalProducts, setGlobalProducts] = useState([]);
  const [globalCartObj, setGlobalCartObj] = useState([]);

    
 
  return (
    
        <GlobalContext.Provider value= {{ globalCount, setGlobalCount, globalUserObj, setGlobalUserObj, globalIsLogin, setGlobalIsLogin, globalIsRegiter, setGlobalIsRegister, globalProducts, setGlobalProducts, globalCartObj, setGlobalCartObj }}>
        
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element = {<Assign/>} />
            <Route path="/productsdetails" element = {<Product/>} />
            <Route path="/profile" element = {<Profile/>} />
            <Route path="/cart" element = {<Cart/>} />
        </Routes>
    </BrowserRouter>
    
    </GlobalContext.Provider>
    
  )
}

export default App




