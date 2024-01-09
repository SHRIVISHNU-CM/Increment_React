import { useState } from "react";
import "./Style.css";



function Incdec(){
  const [counter,setCounter] = useState(0);

  function clickincrement(){
    setCounter(counter+1)
  }
  function clickdecrement(){
    setCounter(counter-1)
  }

  return(
    <div className="container-wrapper">
     <h1>Hello vishnu</h1>
     <div className="main">
          <h2>
            Value of counterL:{counter}

          </h2>
          <div className="btn">
            <button id="increment" onClick={clickincrement}>Increment</button>
            <button id="decrement" onClick={clickdecrement}>Decrement</button>
          </div>
        
     </div>
      
    </div>
  )
}

export default Incdec;