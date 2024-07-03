import { useState } from "react"

export default function BetterSignUpForm(){
    const [formData, setFormData] = useState({firstName: "", lastName:""})
    const handleSubmit = ()=>{
    }
    const handleChange = (evt)=>{
        const changedField = evt.target.name
        const changedValue = evt.target.value
        setFormData((currData)=>{
            return {...currData, [changedField]: changedValue}
        })
    }
    return(
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" placeholder="first name" value={formData.firstName} onChange={handleChange} />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" placeholder="last name" value={formData.lastName} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}