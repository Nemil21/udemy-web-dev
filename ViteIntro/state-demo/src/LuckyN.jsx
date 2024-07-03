import { useState } from "react"
import Dice from "./Dice"
import { getRolls } from "./utils"
import Button from "./Button"
export default function LuckyN({title, numDice=2, winCheck}){
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = winCheck(dice)
    const roll = ()=>{
        setDice(getRolls(numDice))
    }
    return(
        <main className="LuckyN">
            <h1>{title}   {isWinner && "You Win!"}</h1>
            <Dice dice={dice}/>
            <Button onClick={roll} text={"Re-Roll Dice"}/>
        </main>
    )
}