import { useState } from "react"

export default function ScoreKeeper(){
    const [scores, setScores] = useState({p1Score:0, p2Score:0})
    const increaseP1Score = ()=>{
        setScores((oldScores) =>{
            return {...oldScores, p1Score: oldScores.p1Score+1}
        })
    }   
    const increaseP2Score = ()=>{
        setScores((oldScores) =>{
            return {...oldScores, p2Score: oldScores.p2Score+1}  //spread operator makes the copy of the object
        })
    }
    return(
        <div>
            <p>Player1: {scores.p1Score} </p>
            <p>Player2: {scores.p2Score} </p>
            <button onClick={increaseP1Score}>+1 Player1</button>
            <button onClick={increaseP2Score} >+1 Player2</button>
        </div>
    )
}