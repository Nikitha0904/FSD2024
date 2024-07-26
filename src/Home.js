// import { createContext, useState } from "react"
import { useContext } from "react";
import Thirteen from "./onBoard";
import Welcome from "./Welcome";
import { GlobalContext } from "./App";



function Home() {
    const{ globalIsLogin } = useContext(GlobalContext);
    

  return (
    <div>
        {globalIsLogin ? 
            <Welcome/>
            : 
            <Thirteen/>
        }
    </div>
  )
}

export default Home
