import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

function Assign() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/products');
                console.log(res);
                const resData = await res.data;
                setData(resData);
                console.log(resData);
            
        }
        fetchMyData();
    }, []);

    return (
        <div className='mt-4'  style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center'}}>
            {
                data.map((product, index) => (
                    <Card key={index} product={product} />
                ))
            }
        </div>
    );
}

export default Assign;
