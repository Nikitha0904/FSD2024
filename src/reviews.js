// import React from 'react';

// function Reviews() {
//   const reviews = {
//     harika: "good product",
//     nikitha: "well",
//     sowjanya: "nice"
//   };

//   return (
//     <div>
//       <h1>Product Name</h1>
//       {Object.entries(reviews).map(([reviewer, review], index) => (
//         <div key={index} style={{ marginBottom: '30px' }}>
//           <h2>{reviewer}</h2>
//           <p>{review}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Reviews;

import React from 'react';

function Reviews() {
  const reviews = [["harika", "good product"], ['nikitha', "well"], ['sowjanya', "nice"]];

  return (
    <div>
      <h1>Product Name</h1>
      {reviews.map(([reviewer, review], index) => (
        <div key={index} style={{ marginBottom: '30px', lineHeight: 0.5 }}>
          <h2>{reviewer}</h2>
          <p>{review}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
