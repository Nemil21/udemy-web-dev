import Die from "./Die"
import "./Dice.css" 
export default function Dice({dice, color}){
    return(
        <section className="Dice">
            {dice.map((d,i)=>{
                return <Die key={i} val={d} color={color}/>
            })}
        </section>
    )
}
