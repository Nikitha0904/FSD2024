import { useRef } from "react";

function Twelve() {

    const firstRef = useRef(null);

    const formSubmitted = (event) => {
        event.preventDefault();
        console.log("Form in submittedd");
        console.log(firstRef.current.value);
        firstRef.current.value = ""; //clear value
        console.log(firstRef.current.value);
    }

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <input type="text" ref={firstRef}/>
        <button type = 'submit' >Submit</button>
      </form>
    </div>
  )
}

export default Twelve
