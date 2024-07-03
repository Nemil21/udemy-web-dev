
import { useState, useEffect } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    // useEffect(function myEffect(){
    //         console.log("My Effect was called")
    // }, [])
    useEffect(function myEffect(){
            console.log("My Effect was called")
    }, [count])
    const increment = () => {
        setCount((count) => count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>
                +1
            </button>
        </div>
    )
}