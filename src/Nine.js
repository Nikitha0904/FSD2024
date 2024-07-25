import { useEffect, useState } from "react";

function Nine() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("use effect is called");
    }, []);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count > 0 ? count - 1 : 0);
    };

    return (
        <div style={{ width: '100%' }}>
            {count === 0 ? (
                <>
                    <button
                        className="btn btn-light"
                        onClick={handleIncrement}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#007bff';
                            e.target.style.borderColor = '#007bff';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#f8f9fa';
                            e.target.style.borderColor = '#ced4da';
                            e.target.style.color = '#495057';
                        }}
                        style={{ width: '100%' }}
                    >
                        Add to cart
                    </button>
                </>
            ) : (
                <div style={{ display: 'flex',   }}>
                    <button className="btn btn-light btn-md" onClick={handleDecrement} >-</button>
                    <h4 style={{ marginRight: '10px', marginLeft: '10px' }}>{count}</h4>
                    <button className="btn btn-light btn-md" onClick={handleIncrement} >+</button>
                </div>
            )}
        </div>
    );
}

export default Nine;
