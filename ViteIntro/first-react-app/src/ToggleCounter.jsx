import { useState } from "react"; 
import './Toggler.css'          
export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true);
    const [num, setNum] = useState(0);

    const toggleIsHappy = ()=> setIsHappy(!isHappy)
    const counter = ()=>setNum(num+1)
    return(
        <div>
            <p onClick={counter}>{num}</p>
            <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? "😊" : "😭"}  </p>
        </div>
    )  



    
}