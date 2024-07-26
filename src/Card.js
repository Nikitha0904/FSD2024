
import { useContext } from "react";
import Nine from "./Nine";
import { GlobalContext } from "./App";

function Card(props) {
    const {globalProducts} = useContext(GlobalContext);
    const index = props.index;
    
    return (
        <div className="card" style={{ width: '250px', marginLeft: '16px', marginBottom: '16px' }} >
            <img src={globalProducts[index].image} alt="" width="150" height={150} className="mx-auto"
                style={{ borderRadius: '50px' }} />
            <div className="card-body " >
                <h6>{globalProducts[index].title.split(' ').slice(0, 3).join(' ')}</h6>
                <p>₹{globalProducts[index].price}</p>
                <div style={{ display: 'flex', alignItems: 'center',  }}>
                    <p style={{ color: '#FFD700', fontSize: '23px' }}>★★★★★</p>
                    <p style={{ marginLeft: '4px' }}>({globalProducts[index].rating.count})</p>
                </div>
                
                {/* <button type="button" className="btn btn-primary">Connect</button> */}
                <Nine index= {index}/>
            </div>
        </div>
    );
}
export default Card;
