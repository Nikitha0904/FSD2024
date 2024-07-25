import Nine from "./Nine";

function Card(props) {

    const product = props.product;
    return (
        <div className="card" style={{ width: '250px', marginLeft: '16px', marginBottom: '16px' }} >
            <img src={product.image} alt="" width="150" height={150} className="mx-auto"
                style={{ borderRadius: '50px' }} />
            <div className="card-body " >
                <h6>{product.title.split(' ').slice(0, 3).join(' ')}</h6>
                <p>₹{product.price}</p>
                <div style={{ display: 'flex', alignItems: 'center',  }}>
                    <p style={{ color: '#FFD700', fontSize: '23px' }}>★★★★★</p>
                    <p style={{ marginLeft: '4px' }}>({product.rating.count})</p>
                </div>
                
                {/* <button type="button" className="btn btn-primary">Connect</button> */}
                <Nine />
            </div>
        </div>
    );
}
export default Card;
