import { useContext } from "react";
import CartItem from "./CartItem"
import Navigation from "./Navigation"
import { GlobalContext } from "./App";
import PriceDetails from "./PriceDetails";

function Cart() {

    const {globalCartObj} = useContext(GlobalContext);

  return (
    <div>
        <Navigation/>
        <h1 style={{marginLeft: '3%'}}>Cart</h1>
        <div  style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '16px', marginLeft: '3%', marginRight: '3%' }}>
            <div  >
            {
                
                globalCartObj.map((_, index) => (
                    <CartItem index = {index} />
                ))
            }
            </div>
            <div> 
                <PriceDetails/>
            </div>
        </div>
      
    </div>
  )
}

export default Cart
