import React, { useState } from "react";
import Reviews from "./reviews";

function Eleven() {
  const [text, setText] = useState("");
  const [reviews] = useState([]); 

  const addReview = () => {
    reviews.push(text);
    setText("");   
  };

  const inputValueChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div  style={{ display: 'flex'}}>
      <input
        type="text"
        placeholder="Enter a review"
        onChange={inputValueChange}
        value={text}
        style={{width: "90%", height: '38px', borderRadius: '10px'}}
      />
      <button className="btn btn-primary " onClick={addReview} style={{marginLeft: '10px'}}>
        Add Review
      </button>
      </div>
      <Reviews r = {reviews}/>
    </div>
  );
}

export default Eleven;
