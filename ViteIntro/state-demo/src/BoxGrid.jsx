import { useState } from "react";
import Box from "./Box";
export default function BoxGrid(){
    const [boxes, setBoxes] = useState([false,false,false,false,false,false,false,false,false])
    const reset=()=>{
        setBoxes([false,false,false,false,false,false,false,false,false])
    }
    const toggleBox = (idx)=>{
        setBoxes((oldBoxes)=> {
            return oldBoxes.map((value,i)=>{
                if(i===idx) return !value
                else return value
            })
        })
    }
    return(
        <div>
            {boxes.map((b,i)=>{
                return <Box key={i} isActive={b} toggle={()=>toggleBox(i)}/>
            })}
            <button onClick={reset}>Reset</button>
        </div>
    )
}