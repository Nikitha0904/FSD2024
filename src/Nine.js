import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./App";

function Nine({ index }) {
    const [count, setCount] = useState(0);
    const { globalCount, setGlobalCount, globalProducts, globalCartObj, setGlobalCartObj } = useContext(GlobalContext);


    useEffect(() => {
        console.log("useEffect is called");
    }, []);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count === 1) {
            setGlobalCount(globalCount - 1);
        }
        setCount(count > 0 ? count - 1 : 0);
    };

    const handleAdd = () => {
        setCount(1);
        setGlobalCount(globalCount + 1);
        const newCartObj = [...globalCartObj, globalProducts[index]];

        setGlobalCartObj(newCartObj);
        console.log(globalCartObj);
    };

    return (
        <div style={{ width: '100%' }}>
            {count === 0 ? (
                <button
                    className="btn btn-light"
                    onClick={handleAdd}
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
            ) : (
                <div style={{ display: 'flex' }}>
                    <button className="btn btn-light btn-md" onClick={handleDecrement}>-</button>
                    <h4 style={{ marginRight: '10px', marginLeft: '10px' }}>{count}</h4>
                    <button className="btn btn-light btn-md" onClick={handleIncrement}>+</button>
                </div>
            )}
        </div>
    );
}

export default Nine;