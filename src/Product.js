import React from 'react';
import Productdisplay from './productdisplay';
import ProSpec from './proSpec';
import Eleven from './eleven';

function Product() {
  return (
    <div style={{ padding: '20px', maxWidth: '100%', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',}}>
      
      <div style={{ padding: '16px',  backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <Productdisplay />
      </div>

      <div style={{ padding: '16px',  backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginTop: "10px"}}>
        <ProSpec />
      </div>
      
      <div style={{ padding: '16px',  backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginTop: "10px"}}>
        <Eleven />
      </div>
      
    </div>
  );
}

export default Product;
