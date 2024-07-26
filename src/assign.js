import React, {  useContext, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import Navigation from './Navigation';
import { GlobalContext } from './App';


function Assign() {
    const {globalProducts, setGlobalProducts} = useContext(GlobalContext);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/products');
                console.log(res);
                const resData = res.data.map(product => ({
                    ...product,
                    count: 0,
                    cart: 0 
                }));
                setGlobalProducts(resData);
                console.log(resData);
            
        }
        fetchMyData();
 }, [setGlobalProducts] );

    return (

        <>
            <Navigation/>
           
        <div className='mt-4'  style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center'}}>
            {
                globalProducts.map((product, index) => (
                    <Card key={index} index= {index} />
                ))
            }
        </div>
        </>
    );
}

export default Assign;
