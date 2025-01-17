import { useState } from "react";

export default function ProfileSearchForm({search}){
    const [term, setTerm] = useState("")    

    const handleChange = (evt)=>{
        setTerm(evt.target.value)
    }
     
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        search(term);
        setTerm("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} onChange={handleChange}/>
            <button>Search!</button>
        </form>
    )
}