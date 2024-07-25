import React from 'react';
import Nine from './Nine';

function Productdisplay() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px' }}>
      <img src='/image.png' alt='product' style={{ width: '490px', height: '250px', objectFit: 'cover' }} />
      <div>
        <h2>Product Name</h2>
        <p style={{ marginBottom: '60px' }}>
          Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description
        </p>
        <h2>₹500.0</h2>
        <div style={{width: '15%'}}>
        <Nine />
        </div>
      </div>
    </div>
  );
}

export default Productdisplay;
