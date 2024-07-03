import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    const addOne = ()=>{
        setCount(count+1)
    }
    const addThree = ()=>{
        // When we are modifying the old version of the state using current value of the state alwaysf use the below used syntax which uses callbacks which get qued in order to chain up the modifications. normal vala use kiya to same hi rahega bhai 3 baar bhi kro plus 1 hi hoga.
        setCount((currentCount) => currentCount+1)
        console.log(count) //idhar abhi bhi count 0 hi rahega use state call na ho tab tak kuch change nai hoga bs use state call hone pe teeno que me run honge
        setCount((currentCount) => currentCount+1)
        setCount((currentCount) => currentCount+1)
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
        </div>

    )
}