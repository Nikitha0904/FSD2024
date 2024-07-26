import { useContext } from "react";
import { GlobalContext } from "./App";

function PriceDetails() {
    const { globalCartObj } = useContext(GlobalContext);

    // Calculate the total price
    const totalPrice = globalCartObj.reduce((sum, item) => sum + item.price , 0);

    return (
        <div className="card" >
            <div style={{ marginLeft: '4%', marginRight: '4%' }}>
            <p style={{ fontWeight: 'bold' }}>Price details</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p>Price ({globalCartObj.length} items)</p>
                <p>₹{totalPrice.toFixed(2)}</p> 
            </div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p>Price ({globalCartObj.length} items)</p>
                <p>₹{totalPrice.toFixed(2)}</p> 
            </div>
            </div>
        </div>
    );
}

export default PriceDetails;
