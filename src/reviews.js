import React from 'react';

function Reviews(props) {
  const reviews = props.r;
  const reviewer = "Reviewer name";

  return (
    <div>
      <h4 style={{ marginBottom: '20px', marginTop: '20px' }}>Reviews</h4>
      {reviews.map((review, index) => (
        <div key={index} style={{ marginBottom: '25px', lineHeight: 0.5 }}>
          <p style={{ fontWeight: 'lighter' }}>{reviewer}</p>
          <p style={{ fontWeight: 'bold' }}>{review}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
