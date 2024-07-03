import { useState } from "react"

const randomChoice = (arr)=>{
    return arr[Math.floor(Math.random()*arr.length)]
}
export default function ColorBox({colors}){ 
    const [col, setCol] = useState(randomChoice(colors))
    const changeColor = ()=>{
        console.log("div clickd")
        setCol(randomChoice(colors))
    }
    return(
        <div style={{height: '100px', width: '100px', backgroundColor: `${col}`}} onClick={changeColor}>
        </div>
    )
    }