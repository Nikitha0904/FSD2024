// import React from 'react';

// function Four() {
//   const array = ["Apple", "Mango", "Banana", "Grapes"];
//   return (
//     <div>
//         <ul>
//       {array.map((item, index) => (
//         <li key = {index}>{item}</li>
//       ))}
//       </ul>
//     </div>
//   );
// }

// export default Four;

import React from 'react';

function Four() {
  const array = ["Apple", "Mango", "Banana", "Grapes"];
  const listItems = array.map((item, index) => 
   <li key={index}>{item}</li>
  );

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Four;

