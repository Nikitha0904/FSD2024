import React from 'react'
import First from './first';
function Fifth() {
    let res = true;
  return (
    <div>
      {res? <First/> : <div>False</div>}
      <img src='../image.png' alt='atm'/>
    </div>
  )
}

export default Fifth;
 