
import { useContext } from "react"
import Nine from "./Nine"
import { GlobalContext } from "./App"

function CartItem({index}) {
    const {globalCartObj} = useContext(GlobalContext);
    

  return (
    <div >
        <div className="card mb-3 " style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '16px'}}>
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}> 
                <img src={globalCartObj[index].image} alt='product' style={{ width: '150px', height: '120px' ,  }} />
                </div>
                <div style={{marginTop: '2%', marginBottom: '2%'}}>
                    <h4>Product Name</h4>
                    <p >
                    {globalCartObj[index].description.split(" ").slice(0, 10).join(" ")} 
                    </p>
                    <div style={{width: '15%'}}>
                    <Nine />
                    </div>
                </div>
                </div>
                
    </div>
  )
}

export default CartItem
