import React, { useState } from "react";

function Ten() {
  const [text, setText] = useState("");
 const [review, setReview]  = useState("");

  const addReview = () => {
    setReview(text);
    setText("");
  };

  const inputValueChange = (e) => {
    
    setText(e.target.value);

  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a review"
        onChange={inputValueChange}
        value={text}
      />
      <button className="btn btn-primary btn-md" onClick={addReview}>
        ADD
      </button>
     
    <h1>{review}</h1>
      
    </div>
  );
}

export default Ten;
