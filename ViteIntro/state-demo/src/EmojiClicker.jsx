import {v4 as uuid} from 'uuid'
import { useState } from "react"

function randomEmoji(){
    const chocies = ["😉","😋","🤐","😖","😤"]
    return chocies[Math.floor(Math.random()*chocies.length)]
}
export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id:uuid(), emoji: randomEmoji()}])
    const addEmoji = ()=>{
        setEmojis((oldEmojis)=>{
            return [...oldEmojis, {id:uuid(), emoji:randomEmoji()}]
        })
    }
    const deleteEmoji = (id)=>{
        setEmojis((prevEmojis)=>{
            return prevEmojis.filter(e => e.id !== id)
        })
    }
    const convertToHearts = ()=>{
        setEmojis((prevEmojis)=>{
            return prevEmojis.map((element)=>{
                return {...element, emoji: "💖" }
            })
        })
    }
    return(
        <div>   
            <div>
            {emojis.map((e)=>{
                return <span onClick={()=>deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
            })}
            </div>
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={convertToHearts}>Convert To Hearts</button>
        </div>
    )
}