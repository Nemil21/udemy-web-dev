import { TextField, Slider,Box } from "@mui/material"
import { useState } from "react"

export default function FormDemo(){
    const [text,setText] = useState("")
    const [volume, setVolume] = useState(50)
    const handleChange = (e)=>{
        setText(e.target.value)
    
    }
    const changeVolume = (e, newVolume)=>{
        setVolume(newVolume)
    }
    return(
        <Box sx={{border: "1px solid red", p: 6}}>
            <h1>Name is : {text}</h1>
            <TextField  color={text ? "primary":"error"} value={text} id="outlined-basic" label="Outlined primary" variant="outlined" onChange={handleChange} />
            <h1>Volume is {volume}</h1>
            <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        </Box>
    )
}   