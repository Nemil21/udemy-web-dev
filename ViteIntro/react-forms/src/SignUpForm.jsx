import { useState } from "react"

export default function SignUpForm(){
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const updateFirstname =(e)=>{
        setFirstname(e.target.value)
    }
    const updateLastname =(e)=>{
        setLastname(e.target.value)
    }
    const handleSubmit = ()=>{
        console.log(`First Name: ${firstname}, Last Name: ${lastname}`)
    }
    return(
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="" id="firstName" placeholder="first name" value={firstname} onChange={updateFirstname} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="" id="lastName" placeholder="last name" value={lastname} onChange={updateLastname} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}