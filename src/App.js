import { BrowserRouter, Route, Routes } from "react-router-dom"
import Thirteen from "./onBoard"
import Assign from "./assign"
import Product from "./Product"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Thirteen/>} />
            <Route path="/products" element = {<Assign/>} />
            <Route path="/productsdetails" element = {<Product/>} />


        </Routes>
    </BrowserRouter>
        
  )
}

export default App




